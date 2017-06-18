const TimeLine = require('./svgLog');
const {pause, pseudoFetch} = require('./common');
const {takeLast, throttle} = require('promise-decorators');
require('codemirror/mode/javascript/javascript');
const CodeMirror = require('codemirror');

const helloTimeLine = new TimeLine(document.querySelector('#hello-time-line'), {
	click: {
        caption: 'Click event',
		class: 'yellow'
	}
});

const helloButton = document.querySelector('#hello-button');

helloButton.addEventListener('click', () => {
    helloTimeLine.log('click');    
});

CodeMirror(document.querySelector("#hello-send-code"), {
	lineNumbers: true,
	mode: "javascript",
	value: `
		helloButton.addEventListener('click', () => {
			helloTimeLine2.log('click');

			fetch('some/url/')
				.then(result => {
					// here should be some page update logic
					helloTimeLine2.log('handle');				
				});
		});
	`.replace(/\n\t\t/g, '\n').replace(/^\s+/, '').replace(/\s+$/, ''),
	viewportMargin: Infinity
});

(()=>{	
	const logger = type => () => helloTimeLine2.log(type);
	const fetch = pseudoFetch.bind(null, logger('start'), logger('end'));
    
	helloButton.addEventListener('click', () => {
		helloTimeLine2.log('click');

		fetch('some/url/')
			.then(result => {
				// here should be some page update logic
				helloTimeLine2.log('handle');				
			});
	});  
})();

const helloTimeLine2 = new TimeLine(document.querySelector('#hello-time-line2'), {
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
	handle: {
        caption: 'Output new data',
		class: 'blue'
	}
});

CodeMirror(document.querySelector("#hello-throttle-code"), {
	lineNumbers: true,
	mode: "javascript",
	value: `
		// throttle original fetch
		const throttledFetch = throttle(fetch, 1000);

		throttleButton.addEventListener('click', () => {
			helloTimeLine3.log('click');

			throttledFetch('some/url/')
				.then(result => {
					// here should be some page update logic
					helloTimeLine3.log('handle');				
				});
		});  
	`.replace(/\n\t\t/g, '\n').replace(/^\s+/, '').replace(/\s+$/, ''),
	viewportMargin: Infinity
});

const throttleButton = document.querySelector('#throttle-button');

(()=>{	
	const logger = type => () => helloTimeLine3.log(type);
	const fetch = pseudoFetch.bind(null, logger('start'), logger('end'));
    
	// throttle original fetch
	const throttledFetch = throttle(fetch, 1000);

	throttleButton.addEventListener('click', () => {
		helloTimeLine3.log('click');

		throttledFetch('some/url/')
			.then(result => {
				// here should be some page update logic
				helloTimeLine3.log('handle');				
			});
	});  
})();

const helloTimeLine3 = new TimeLine(document.querySelector('#hello-time-line3'), {
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
	handle: {
        caption: 'Output new data',
		class: 'blue'
	}
});



const smartFetch = takeLast(throttle(pseudoFetch, 500));
