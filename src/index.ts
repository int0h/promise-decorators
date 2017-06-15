export interface AsyncFunction<T> {
    (...args: any[]): Promise<T>;
}

interface Resolver<T> {
	(value: T | PromiseLike<T>): Promise<T>;
}

interface Rejecter<T> {
	(reason: any): Promise<T>;
}

export function takeLast<T>(fn: AsyncFunction<T>): AsyncFunction<T> {
	var lastId = 0;

	return (...args) => {
		const currentId = ++lastId;

		return new Promise<T>((resolve, reject) => {
			fn(...args).then(
				result => {
					if (currentId === lastId) {
						resolve(result);
					}
				}, 
				error => {
					if (currentId === lastId) {
						reject(error);
					}
				}
			);
		});
	};
}

export function asyncTransform<T>(fn: AsyncFunction<T>, transform: Function): AsyncFunction<T> {
	const tfn = (args: any[], resolve: Resolver<T>, reject: Rejecter<T>) => fn(...args).then(resolve, reject);
	const transformed = transform(tfn);
	return (...args) => {
		return new Promise<T>((resolve, reject) => {
			transformed(args, resolve, reject);
		});
	};	
}

export type PromiseState = 'pending' | 'resolved' | 'rejected';

export interface WatchHandler {
	(state: PromiseState): never;
}

export function watchPromise<T>(fn: AsyncFunction<T>, handler: WatchHandler){
	return (...args: any[]) => {
		handler('pending');
		return fn(...args).then(
			result => {
				handler('resolved');
				return result;
			}, 
			error => {
				handler('rejected');
				throw error;
			}
		);
	};
}
