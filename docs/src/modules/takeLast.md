Function [takeLast\<T\>]
===

Signature
---
```typescript
(fn: AsyncFunction) => AsyncFunction
```

Description
---
The transformed function returns a `Promise` which will be resolved (or rejected)
only if it's the last. So if after calling no any previous returned promises will be settled.

Parameters
---
- **fn**: [AsyncFunction](https://github.com/int0h/promise-decorators/blob/master/docs/src/index.md#id-33) - source promise-function
