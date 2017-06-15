import { AsyncFunction } from '../index';
export declare type PromiseState = 'pending' | 'resolved' | 'rejected';
export interface WatchHandler {
    (state: PromiseState): void;
}
export declare function watchPromise<T>(fn: AsyncFunction<T>, handler: WatchHandler): (...args: any[]) => any;
