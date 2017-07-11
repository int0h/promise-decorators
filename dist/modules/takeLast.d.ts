import { AsyncFunction } from '../index';
/**
 * The transformed function returns a `Promise` which will be resolved (or rejected)
 * only if it's the last. So if after calling no any previous returned promises will be settled.
 *
 * @param fn - source promise-function
 */
export declare function takeLast<T>(fn: AsyncFunction<T>): AsyncFunction<T>;
