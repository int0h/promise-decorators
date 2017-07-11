import test from 'ava';

export function fetch<T>(data: T, pause: number = 100): Promise<T> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(data);
        }, pause);
    });
}

export function syncResolver<T>(data: T): Promise<T> {
    return Promise.resolve(data);
}

/**
 * a small class to measure the frequency of events
 */
export class Oscilloscope {
    start: number;
    count: number;

    constructor () {
        this.start = Date.now();
        this.count = 0;
    }

    tick () {
        this.count++;
    }

    measure() {
        const timeSpent = Date.now() - this.start;
        return this.count / timeSpent * 1000;
    }
}