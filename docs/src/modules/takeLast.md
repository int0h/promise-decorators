Function [takeLast\<T\>]
===

Signature
---
```typescript
(fn: AsyncFunction) => AsyncFunction
```

Description
---
Takes a promise-functions and return new one
which returns a promise which will be resolved (or rejected)
if it (the promise) the result of last function execution

Parameters
---
- **fn**: [AsyncFunction](https://github.com/int0h/promise-decorators/blob/master/docs/src/index.md#id-33) - a function to be wrapped
