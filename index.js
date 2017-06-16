const TimeLine = require('./svgLog');
const wiki = require('./dist/wiki');

const pause = ms => new Promise(resolve => setTimeout(() => resolve(), ms));

const pseudoFetch = (onStart, onEnd) => {
    onStart();
    return pause(1000)
        .then(() => onEnd());
};

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
	handle: {
        caption: 'Output new data',
		class: 'blue'
	}
});
const basicButton = document.querySelector('#basic-button');
basicButton.onclick = () => {
    const logger = type => () => basicTimeLine.log(type);
    basicTimeLine.log('click');
    pseudoFetch(logger('start'), logger('end'))
        .then(logger('handle'));        
}
