const TimeLine = require('./svgLog');
const {pause, pseudoFetch} = require('./common');
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
	value: `
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
	`.replace(/\n\t\t/g, '\n').replace(/^\s+/, '').replace(/\s+$/, ''),
	viewportMargin: Infinity
});

const basicButton = document.querySelector('#basic-button');

(()=>{	
	const logger = type => () => basicTimeLine.log(type);
	const fetch = pseudoFetch.bind(null, logger('start'), logger('end'));
    
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
})();