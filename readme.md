Promise-decorators
===

About
---
This is a library which provides tools for asynchronous function transformation.

Each of them is a function-transformer which takes AsyncFunction (any function returning a Promise) and returns a new one that tweaks the behaviour of the original.

E.g.:
```js
    import {throttle} from 'promise-decorators';

    const throttledFetch = throttle(fetch);
```

So it's pretty much like lodash method for functions, but made for the synchronous ones.

Demo
---
You can find a demo with some examples and playground here:

[https://int0h.github.io/promise-decorators/](https://int0h.github.io/promise-decorators/)

Docs
---
Some additional documentation could be found in ./docs folder (generated) and in the sources.

- [throttle](https://github.com/int0h/promise-decorators/blob/master/docs/src/modules/throttle.md)
- [takeLast](https://github.com/int0h/promise-decorators/blob/master/docs/src/modules/takeLast.md)
- [watchPromise](https://github.com/int0h/promise-decorators/blob/master/docs/src/modules/watchPromise.md)
- [asyncTransform](https://github.com/int0h/promise-decorators/blob/master/docs/src/modules/asyncTransform.md)

Explanation
---
Promises help a developer to work with asynchronous code in JavaScript.
They represent value which will be available later. And we can do something at that moment via `then`, `catch`. Let's take a look at the wikipedia search exmple:

```js
function outputData(data){
    outputBox.innerHTML = data[1]
        .map(item => `<li>${item}</li>`)
        .join('');
}

function handleErrors(error){
    alert(`Error! ${error}`)
}

const wikiQuery = 'https://en.wikipedia.org//w/api.php'
    + '?action=opensearch&format=json&origin=*&limit=10';

function updateTitle(text){
    document.title = 'Search for: ' + text;
}

searchBox.addEventListener('input', () => {    
    const text = searchBox.value;

    const result = fetch(wikiQuery + `&search=${encodeURIComponent(text)}`)
        .then(outputData)
        .catch(handleErrors);

    updateTitle(text);    
});
```
It works in most cases, but may cause problems due to the fact that this code will create a request each time a user presses a key. It could be a problem and most of the time you do not need to do it so frequently.

Commonly used tools to reduce the amount of requests are `throttle` and `debounce`, which limit count of function calls through time. So they take a function and return a new one that modifies original.

It seemed like the only thing to do is to `throttle` a function, but which one?

The first option:
`throttle` whole event handler:
```js
searchBox.addEventListener('input', _.throttle(() => {    
    ...  
}());
```

It'll work, but there are some problems:
- the event handler is not the one we have a problem with, it's a bit strange to `throttle` whole thing because of a small piece of it
- there could be some code which should actually be run on each key press, e.g. it might be a good idea to call `updateTitle` on each key press and limit only network operations

There is a 2'nd option - `throttle` only fetch:
```js
const throttledFetch = _.throttle(fetch, 1000);

searchBox.addEventListener('input', () => {    
    const text = searchBox.value;

    const result = throttledFetch(wikiQuery + `&search=${encodeURIComponent(text)}`)
        .then(outputData)
        .catch(handleErrors);

    updateTitle(text);    
});
```

As for me, that's a bit more reasanoble, but still there is a problem (and tricky one)! In that case the frequency of requests will be reduced, and `updateTitle` will be called the proper number of times.

But `throttledFetch` will return a promise in first time... and a copy of this 1'st promise on each key-press before the next *real* promise. It means that `outputData` will be called several times with the same data!

Promise-decorators solution
---

A function `throttle` from `promise-decorators` package works very similar to lodash's one. The difference is `promise-decorators` version returns only one `Promise` to be resolved not sooner than `pause` ms later than last one.

So the solution is pretty much the same:
```js
import {throttle} from 'promise-decorators';

const throttledFetch = throttle(fetch, 1000);

searchBox.addEventListener('input', () => {    
    const text = searchBox.value;

    const result = throttledFetch(wikiQuery + `&search=${encodeURIComponent(text)}`)
        .then(outputData)
        .catch(handleErrors);

    updateTitle(text);    
});
```
But in that case it will be resolved not more than 1 `Promise` per second (all between will neither be resolved nor rejected). So: no extra request, no extra rerendering.
