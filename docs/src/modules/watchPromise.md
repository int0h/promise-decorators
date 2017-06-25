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
Keeps the beahvior of the original function the same,
but also calls the `handler` on `Promise` state change.

Parameters
---
- **fn**: [AsyncFunction](https://github.com/int0h/promise-decorators/blob/master/docs/src/index.md#id-33) - source promise-function
- **handler**: [WatchHandler](https://github.com/int0h/promise-decorators/blob/master/docs/src/modules/watchPromise.md#id-13) - a function to be called on promise state change
