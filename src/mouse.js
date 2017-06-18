const TimeLine = require('./svgLog');
const {pause, pseudoFetch} = require('./common');
const {takeLast, throttle} = require('promise-decorators');
require('codemirror/mode/javascript/javascript');

const mmTimeLine = new TimeLine(document.querySelector('#mm-time-line'), {
	click: {
        caption: 'Move event',
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
}, 5);

const mmTimeLine2 = new TimeLine(document.querySelector('#mm-time-line2'), {
	click: {
        caption: 'Move event',
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
}, 5);

const field = document.querySelector('#mm-target');

const fetch = (tl) => pseudoFetch.bind(null, ()=>tl.log('start'), ()=>tl.log('end'));
const smartFetch = takeLast(throttle(fetch(mmTimeLine2), 500));

const listen = (fetch, timeLine) => {	
	field.addEventListener('mousemove', () => {
		timeLine.log('click');

		fetch('some/url/')
			.then(result => {
				timeLine.log('output');				
			});
	});
};

listen(fetch(mmTimeLine), mmTimeLine);
listen(smartFetch, mmTimeLine2);