import {throttle} from '../../dist/index';
import * as _ from 'lodash';
import test from 'ava';
import {syncResolver, fetch} from '../testHelpers';

test('throttled function resolves at least once', async t => {
    const transfromed = throttle(syncResolver, 1000);
    t.is(await transfromed(123), 123);
});

test('throttled function resolves first time without delay', async t => {
    const start = Date.now();
    const transfromed = throttle(syncResolver, 1000);
    t.is(await transfromed(123), 123);
    t.true(Date.now() - start < 50);
});

test('throttled function called not more often than specified pause', async t => {
    let timeLine = [0];
    const transfromed = throttle((data: any) => {
        timeLine.push(Date.now());
        return fetch(data, 1);
    }, 100);

    for (let i = 0; i < 10; i++) {
        const res = await transfromed(i);
        const timeSpent = timeLine[timeLine.length - 1] - timeLine[timeLine.length - 2];
        console.log(timeSpent);
        t.true(timeSpent >= 100);
    }
});
