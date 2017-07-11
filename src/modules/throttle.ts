import {AsyncFunction, Resolver, Rejecter} from '../index';
import {asyncTransform} from './asyncTransform';
import {ThrottleSettings} from 'lodash';

/**
 * internal realization of throttle
 * 
 * @param fn 
 * @param pause 
 */
export function throttleFn(fn: Function, pause: number): Function {
	let lastRunTime = 0;
	let lastArgs: any[];
	let lastThis: any;
	let lastResult: any;

	function run(context: any, ...args: any[]) {
		lastArgs = null;
		lastRunTime = Date.now();
		const result = fn.call(context, ...args);
		lastResult = result;
		return result;
	}

	return function(...args: any[]) {
		const now = Date.now();
		const timePass = now - lastRunTime;

		if (!lastArgs) {
		setTimeout(() => {
			if (lastArgs) {
				run(lastThis, ...lastArgs);
			}
		}, pause - timePass);
		}

		if (timePass < pause) {
			lastArgs = args;
			lastThis = this;
			return lastResult;
		}
		
		return run(this, ...args);
	}
}

/**
 * Very similar to a classical throttle. 
 * Throttled function returns promises, which will be resolved (or rejected)
 * not more frequently than once in *pause* time period
 * 
 * @param fn - source promise-function
 * @param pause - a minimum pause between promise resolutions (or rejections)
 */
export function throttle<T>(
	fn: AsyncFunction<T>, 
	pause?: number, 
	options?: ThrottleSettings
): AsyncFunction<T> {
	return asyncTransform(fn, (fn: AsyncFunction<T>) => throttleFn(fn, pause));
}
