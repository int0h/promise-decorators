import { AsyncFunction } from '../index';
export declare function asyncTransform<T>(fn: AsyncFunction<T>, transform: Function): AsyncFunction<T>;
