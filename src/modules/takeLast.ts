import {AsyncFunction} from '../index';

/**
 * Takes a promise-functions and return new one 
 * which returns a promise which will be resolved (or rejected)
 * if it (the promise) the result of last function execution
 * 
 * @param fn - a function to be wrapped
 */
export function takeLast<T>(fn: AsyncFunction<T>): AsyncFunction<T> {
	var lastId = 0;

	return function(...args) {
		const currentId = ++lastId;

		return new Promise<T>((resolve, reject) => {
			fn.apply(this, args).then(
				(result: any) => {
					if (currentId === lastId) {
						resolve(result);
					}
				}, 
				(error: any) => {
					if (currentId === lastId) {
						reject(error);
					}
				}
			);
		});
	};
}
