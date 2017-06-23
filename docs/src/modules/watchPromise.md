<a name="id-13"></a>
Interface [WatchHandler]
===

Signature
---
```typescript
(state: PromiseState) => void
```



Function [watchPromise\<T\>]
===

Signature
---
```typescript
(fn: AsyncFunction, handler: WatchHandler) => AsyncFunction
```

Description
---
Wraps a promise-function into a new one,
which behave the same but also calls a handler each time
a promise returned ('pending'), resolved or rejected

Parameters
---
- **fn**: [AsyncFunction](https://github.com/int0h/promise-decorators/blob/master/docs/src/index.md#id-33) - source promise-function
- **handler**: [WatchHandler](https://github.com/int0h/promise-decorators/blob/master/docs/src/modules/watchPromise.md#id-13) - a function to be called on promise state change
