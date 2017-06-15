import {AsyncFunction, Resolver, Rejecter} from '../index';

export function asyncTransform<T>(fn: AsyncFunction<T>, transform: Function): AsyncFunction<T> {
	const tfn = function(args: any[], resolve: Resolver<T>, reject: Rejecter<T>) {
		return fn.apply(this, args).then(resolve, reject);
	};
	const transformed = transform(tfn);
	return function(...args) {
		return new Promise<T>((resolve, reject) => {
			transformed.call(this, args, resolve, reject);
		});
	};	
}
