Function [asyncTransform\<T\>]
===

Signature
---
```typescript
(fn: AsyncFunction, transform: Function) => AsyncFunction
```

Description
---
Transforms a given promise-function with a transform function

Parameters
---
- **fn**: [AsyncFunction](https://github.com/int0h/promise-decorators/blob/master/docs/src/index.md#id-33) - source promise-function
- **transform**: Function - function which take a function, do some stuff with it and returns a new one
e.g. _.throttle (from lodash)
