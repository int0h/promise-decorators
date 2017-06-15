import { AsyncFunction, WatchHandler } from './index';
export interface AsyncFunctionDecorator<T> {
    (target: any, key: string, descriptor: any): {
        value: AsyncFunction<T>;
    };
}
export declare function asyncTransform<T>(transform: Function): AsyncFunctionDecorator<T>;
export declare function takeLast<T>(): AsyncFunctionDecorator<T>;
export declare function watchPromise<T>(handler: WatchHandler): AsyncFunctionDecorator<T>;
