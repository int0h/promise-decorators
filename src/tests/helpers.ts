import test from 'ava';

export function fetch(data: any, pause: number = 100): Promise<any> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(data);
        }, pause);
    });
}

test('fetch helper works', async t => {
    t.is(await fetch(123), 123)
});