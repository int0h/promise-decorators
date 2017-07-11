import { AsyncFunction } from '../index';
/**
 * Transforms a given promise-function with a transform function
 *
 * @param fn - source promise-function
 * @param transform - function which take a function, do some stuff with it and returns a new one
 * e.g. _.throttle (from lodash)
 */
export declare function asyncTransform<T>(fn: AsyncFunction<T>, transform: Function): AsyncFunction<T>;
