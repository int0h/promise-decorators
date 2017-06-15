export interface AsyncFunction<T> {
    (...args: any[]): Promise<T>;
}
export interface Resolver<T> {
    (value: T | PromiseLike<T>): Promise<T>;
}
export interface Rejecter<T> {
    (reason: any): Promise<T>;
}
export { takeLast } from './modules/takeLast';
export { asyncTransform } from './modules/asyncTransform';
export { watchPromise, PromiseState, WatchHandler } from './modules/watchPromise';
export { throttle, throttleFn } from './modules/throttle';
