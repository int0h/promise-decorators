Function [throttle\<T\>]
===

Signature
---
```typescript
(fn: AsyncFunction, pause: number) => AsyncFunction
```

Description
---
Very similar to a classical throttle.
Throttled function returns promises, which will be resolved (or rejected)
not more frequently than once in *pause* time period

Parameters
---
- **fn**: [AsyncFunction](https://github.com/int0h/promise-decorators/blob/master/docs/src/index.md#id-33) - source promise-function
- **pause**: number - a minimum pause between promise resolutions (or rejections)


Function [throttleFn]
===

Signature
---
```typescript
(fn: Function, pause: number) => Function
```

Description
---
internal realization of throttle

Parameters
---
- **fn**: Function - undefined
- **pause**: number - 
