const TimeLine = require('./svgLog');
const {pause, pseudoFetch, getCode} = require('./common');
const {takeLast, throttle} = require('promise-decorators');
require('codemirror/mode/javascript/javascript');
const CodeMirror = require('codemirror');

const basicTimeLine = new TimeLine(document.querySelector('#basic-time-line'), {
    click: {
        caption: 'Click event',
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

CodeMirror(document.querySelector("#basic-code"), {
    lineNumbers: true,
    mode: "javascript",
    value: getCode(main),
    viewportMargin: Infinity,
    readOnly: true
});

const basicButton = document.querySelector('#basic-button');

function main(){    
    const logger = type => () => basicTimeLine.log(type);
    const fetch = pseudoFetch.bind(null, logger('start'), logger('end'));
    // [code]
    // throttle original fetch
    // and take only last resolved result
    const smartFetch = takeLast(throttle(fetch, 500));

    basicButton.onclick = () => {
        basicTimeLine.log('click');

        smartFetch('some/url/')
            .then(result => {
                // here should be some page update logic
                basicTimeLine.log('output');                
            });
    };  
    // [/code]
};
main();
