import {AsyncFunction, Resolver, Rejecter} from '../index';
import {asyncTransform} from './asyncTransform';

export function throttleFn(fn: Function, pause: number): Function {
	let lastRunTime = 0;
	let lastArgs: any[];
	let lastThis: any;
	let lastResult: any;

	function run(context, ...args) {
		lastArgs = null;
		lastRunTime = Date.now();
		const result = fn.call(context, ...args);
		lastResult = result;
		return result;
	}

	return function(...args) {
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

export function throttle<T>(fn: AsyncFunction<T>, pause: number): AsyncFunction<T> {
	return asyncTransform(fn, fn => throttleFn(fn, pause));
}
