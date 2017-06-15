import {AsyncFunction} from '../index';

export type PromiseState = 'pending' | 'resolved' | 'rejected';

export interface WatchHandler {
	(state: PromiseState): void;
}

export function watchPromise<T>(fn: AsyncFunction<T>, handler: WatchHandler){
	return function(...args: any[]) {
		handler('pending');
		return fn.apply(this, args).then(
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
