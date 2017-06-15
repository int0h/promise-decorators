import { AsyncFunction } from '../index';
export declare function throttleFn(fn: Function, pause: number): Function;
export declare function throttle<T>(fn: AsyncFunction<T>, pause: number): AsyncFunction<T>;
