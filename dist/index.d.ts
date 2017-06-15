export interface AsyncFunction<T> {
    (...args: any[]): Promise<T>;
}
export declare function takeLast<T>(fn: AsyncFunction<T>): AsyncFunction<T>;
export declare function asyncTransform<T>(fn: AsyncFunction<T>, transform: Function): AsyncFunction<T>;
export declare type PromiseState = 'pending' | 'resolved' | 'rejected';
export interface WatchHandler {
    (state: PromiseState): never;
}
export declare function watchPromise<T>(fn: AsyncFunction<T>, handler: WatchHandler): (...args: any[]) => Promise<T>;
