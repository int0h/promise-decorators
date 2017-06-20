import {AsyncFunction, Resolver, Rejecter} from '../index';

/**
 * Transforms a given promise-function with a transform function
 * 
 * @param fn - a function to be transformed
 * @param transform - function which take a function, do some stuff and returns a new one
 * e.g. _.throttle (from lodash)
 */
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
