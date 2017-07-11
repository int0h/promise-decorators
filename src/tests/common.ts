import {throttle, takeLast, watchPromise, asyncTransform} from '../../dist/index';
import {Transformer} from '../../dist/index';
import test from 'ava';
import {syncResolver} from '../testHelpers';

const cfg: {
    name: string,
    fn: Transformer<any>,
    args: any[]
}[] = [
    {
        name: 'throttle',
        fn: throttle,
        args: [100]
    },
    {
        name: 'takeLast',
        fn: takeLast,
        args: []
    },
    {
        name: 'watchPromise',
        fn: watchPromise,
        args: [() => {}]
    },
    {
        name: 'asyncTransform',
        fn: asyncTransform,
        args: [fn => fn]
    }
];

for (let {name, fn, args} of cfg) {
    test(`${name} returns a function`, t => {
        const transfromed = fn(syncResolver, ...args);
        t.is(typeof transfromed, 'function');
    })

    test(`${name} returned function returns a Promise`, t => {
        const transfromed = fn(syncResolver, ...args);
        const result = transfromed(123);
        t.true(result instanceof Promise);
    })
}


