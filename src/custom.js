const TimeLine = require('./svgLog');
const {pause, getCode} = require('./common');
const {takeLast, throttle, watchPromise} = require('promise-decorators');
require('codemirror/mode/javascript/javascript');
const CodeMirror = require('codemirror');

const customTimeLine = new TimeLine(document.querySelector('#custom-time-line'), {
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

const codeEditor = CodeMirror(document.querySelector("#custom-code"), {
    lineNumbers: true,
    mode: "javascript",
    value: getCode(fn),
    viewportMargin: Infinity
});

const customButton = document.querySelector('#custom-click-button');
const customApply = document.querySelector('#custom-apply');
const customSpinner = document.querySelector('#custom-spinner');
const customOutput = document.querySelector('#custom-output');
const customSettings = document.querySelector('#custom-settings');

function getFormData(form, mapValues = val => val){
    const formData = new FormData(form);
    let res = {};
    for (let [key, value] of formData.entries()){
        res[key] = mapValues(value);
    }
    return res;
}


function fn(fetch, button, timeLine, spinner, getN, output, {throttle, takeLast, watchPromise}){
    // [code]
    // throttle original fetch
    // and take only last resolved result
    const smartFetch = watchPromise(
        takeLast(
            throttle(fetch, 500)
        ),
        status => {
            spinner.style.display = status === 'pending'
                ? 'inline-block' 
                : 'none';
        }
    );

    button.onclick = () => {
        timeLine.log('click');

        smartFetch(getN())
            .then(result => {
                // here should be some page update logic
                output.textContent = 'Pong #' + result;
                timeLine.log('output');                
            });
    };  
    // [/code]    
}

let fetchParmas = {
    base: 500,
    deviation: 300
};

customSettings.addEventListener('input', ()=>{
    fetchParmas = getFormData(customSettings, Number);
})

const pseudoFetch = (value) => {
    const {base, deviation} = fetchParmas;    
    customTimeLine.log('start');
    return pause(base + Math.round(Math.random() * deviation))
        .then(() => {
            customTimeLine.log('end');
            return value;
        });
};

let counter = 0;

function main(){    
    fn(pseudoFetch, customButton, customTimeLine, customSpinner, ()=>counter, customOutput, {throttle, takeLast, watchPromise});
    customButton.addEventListener('click', () => {
        counter++;
        customButton.textContent = 'Ping #' + counter;
    })
}

main();

customApply.onclick = () => {
	try {
		const code = codeEditor.getValue();
		fn = new Function('fetch, button, timeLine, spinner, getN, output, {throttle, takeLast, watchPromise}', code);
		main();
	} catch(err) {
		console.error(err);
		alert(err);
	}
}