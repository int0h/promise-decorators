const pause = ms => new Promise(resolve => setTimeout(() => resolve(), ms));

const pseudoFetch = (onStart, onEnd) => {
    onStart();
    return pause(400 + Math.round(Math.random() * 300))
        .then(() => onEnd());
};

function getCode(fn) {
    const code = fn.toString().match(/\/\/\s*\[code\][^\n]*\n([^]*)\/\/\s*\[\/code\]/)[1];
    const prefix = code.match(/^\s*/)[0];
    const re = new RegExp('(^|\\n)' + prefix, 'g');
    return code.replace(re, '$1');
}

module.exports = {pause, pseudoFetch, getCode};