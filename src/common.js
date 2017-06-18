const pause = ms => new Promise(resolve => setTimeout(() => resolve(), ms));

const pseudoFetch = (onStart, onEnd) => {
    onStart();
    return pause(400 + Math.round(Math.random() * 300))
        .then(() => onEnd());
};

module.exports = {pause, pseudoFetch};