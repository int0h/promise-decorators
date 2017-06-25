import {AsyncFunction} from '../index';

export type PromiseState = 'pending' | 'resolved' | 'rejected';

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
export function watchPromise<T>(fn: AsyncFunction<T>, handler: WatchHandler): AsyncFunction<T> {
	return function(...args: any[]) {
		handler('pending');
		return fn.apply(this, args).then(
			(result: T) => {
				handler('resolved');
				return result;
			}, 
			(error: any) => {
				handler('rejected');
				throw error;
			}
		);
	};
}
