import {AsyncFunction} from '../index';

/** 
 * The transformed function returns a `Promise` which will be resolved (or rejected)
 * only if it's the last. So if after calling no any previous returned promises will be settled.
 * 
 * @param fn - source promise-function
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
