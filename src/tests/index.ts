import {throttle} from '../../dist/index';
import test from 'ava';
import {fetch, syncResolver} from '../testHelpers';

test('tests work at all', t => {
    t.is(1, 1);
})

test('syncResolver helper works', async t => {
    t.is(await syncResolver(123), 123)
});


test('fetch helper works', async t => {
    t.is(await fetch(123), 123)
});
