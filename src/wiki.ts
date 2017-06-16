import {throttle, takeLast, watchPromise, asyncTransform} from 'promise-decorators/decorators';

console.log('started');

const text = document.getElementById('text') as HTMLInputElement;
const results = document.getElementById('results');
const loader = document.getElementById('loader');

class Api {
    host: string;

    constructor (host: string) {
        this.host = host;
    }

    @watchPromise(toggleLoader)
    @takeLast()
    @throttle(300)
    search(text: string) {
        return fetch(this.host + `?action=opensearch&format=json&origin=*&search=${encodeURIComponent(text)}&limit=10`);
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

text.oninput = () => text.value.length > 2 && api.search(text.value)
    .then(res => res.json())
    .then(res => {
        results.innerHTML = res[1]
            .map((item: string) => `<li>${item}</li>`)
            .join('');
    });
