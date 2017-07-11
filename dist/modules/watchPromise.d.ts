import { AsyncFunction } from '../index';
export declare type PromiseState = 'pending' | 'resolved' | 'rejected';
/**
 * Takes a promise state and do any side effects
 */
export interface WatchHandler {
    (state: PromiseState): void;
}
/**
 * Keeps the beahvior of the original function the same,
 * but also calls the `handler` on `Promise` state change.
 *
 * @param fn - source promise-function
 * @param handler - a function to be called on promise state change
 */
export declare function watchPromise<T>(fn: AsyncFunction<T>, handler: WatchHandler): AsyncFunction<T>;
