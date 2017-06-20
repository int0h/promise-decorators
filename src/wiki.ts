import {throttle, takeLast, watchPromise, asyncTransform} from 'promise-decorators/decorators';
import {watchPromise as watchPromiseFn} from 'promise-decorators';
declare var require: any;
const TimeLine = require('./svgLog');

console.log('started');

const text = document.getElementById('text') as HTMLInputElement;
const results = document.getElementById('results');
const loader = document.getElementById('loader');

const wikiTimeLine = new TimeLine(document.querySelector('#wiki-time-line'), {
    type: {
        caption: 'Keyboard event',
        class: 'yellow'
    },    
    start: {
        caption: 'Send request',
        class: 'red'
    },
    end: {
        caption: 'Got response',
        class: 'green'
    },
    output: {
        caption: 'Output new data',
        class: 'blue'
    }
});

function buildQuery(params: any) {
    let pairs = [];
    for (let key in params) {
        pairs.push([key, params[key]]);
    }
    return pairs.map(pair => pair.join('=')).join('&');
}

class Api {
    host: string;

    constructor (host: string) {
        this.host = host;
    }

    @watchPromise(toggleLoader)
    @takeLast()
    @throttle(300)
    search(text: string) {
        return fetch(this.host + '?' + buildQuery({
            action: 'opensearch',
            format: 'json',
            origin: '*',
            search: encodeURIComponent(text),
            limit: 10
        }));
    }
}

const api = new Api('https://en.wikipedia.org//w/api.php');

function toggleLoader(status: string) {
    if (status === 'pending') {
        loader.style.display = 'block';
        results.style.display = 'none';
    } else {
        loader.style.display = 'none';
        results.style.display = 'block';
    };
}

text.oninput = () => {
    if (text.value.length < 3) {
        return;
    }
    wikiTimeLine.log('type');
    api.search(text.value)
        .then(res => res.json())
        .then(res => {
            wikiTimeLine.log('output');
            results.innerHTML = res[1]
                .map((item: string) => `<li>${item}</li>`)
                .join('');
        });
};

var fetch = watchPromiseFn(window.fetch, state => {
    switch (state) {
        case 'pending': 
            wikiTimeLine.log('start');
            break;
        case 'resolved':
            wikiTimeLine.log('end');
            break; 
    }
})

