import {AsyncFunction} from '../index';

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
