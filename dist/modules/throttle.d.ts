import { AsyncFunction } from '../index';
/**
 * internal realization of throttle
 *
 * @param fn
 * @param pause
 */
export declare function throttleFn(fn: Function, pause: number): Function;
/**
 * Very similar to a classical throttle.
 * Throttled function returns promises, which will be resolved (or rejected)
 * not more frequently than once in *pause* time period
 *
 * @param fn - source promise-function
 * @param pause - a minimum pause between promise resolutions (or rejections)
 */
export declare function throttle<T>(fn: AsyncFunction<T>, pause: number): AsyncFunction<T>;
