import {
    asyncTransform as _asyncTransform,
    takeLast as _takeLast,
    watchPromise as _watchPromise,
    AsyncFunction,
    WatchHandler
} from './index';

export interface AsyncFunctionDecorator<T> {
    (target: any, key: string, descriptor: any): {
        value: AsyncFunction<T>
    };
}

// Decorators:

export function asyncTransform<T>(transform: Function): AsyncFunctionDecorator<T> {
    return (target: any, key: string, descriptor: any) => ({
        value: _asyncTransform<T>(descriptor.value, transform)
    });
}

export function takeLast<T>(): AsyncFunctionDecorator<T> {
    return (target: any, key: string, descriptor: any) => ({
        value: _takeLast<T>(descriptor.value)
    });
}

export function watchPromise<T>(handler: WatchHandler): AsyncFunctionDecorator<T> {
    return (target: any, key: string, descriptor: any) => ({
        value: _watchPromise<T>(descriptor.value, handler)
    });
}
