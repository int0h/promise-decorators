<a name="id-46"></a>
Interface [AsyncFunctionDecorator]
===

Signature
---
```typescript
(target: any, key: string, descriptor: any) => <unsupported-type>
```

Function [asyncTransform\<T\>]
===

Signature
---
```typescript
(transform: Function) => AsyncFunctionDecorator
```

Parameters
---
- **transform**: Function

Function [takeLast\<T\>]
===

Signature
---
```typescript
() => AsyncFunctionDecorator
```


Function [throttle\<T\>]
===

Signature
---
```typescript
(pause: number) => AsyncFunctionDecorator
```

Parameters
---
- **pause**: number

Function [watchPromise\<T\>]
===

Signature
---
```typescript
(handler: WatchHandler) => AsyncFunctionDecorator
```

Parameters
---
- **handler**: [WatchHandler](https://github.com/int0h/promise-decorators/blob/master/docs/src/modules/watchPromise.md#id-13)