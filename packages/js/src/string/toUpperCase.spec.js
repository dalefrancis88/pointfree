import test from 'tape'

import toUpperCase from './toUpperCase'

import { isFunction } from '@pointfree/core'

const createTestable = fn => (...args) => () =>
    fn.apply(null, args)

test('(String) - toUpperCase', t => {
    const fn = createTestable(toUpperCase)

    t.ok(isFunction(toUpperCase), 'should be a function')

    const err = /^TypeError: toUpperCase: a string must be provided/
    t.throws(fn(undefined), err, 'throws with undefined as argument')
    t.throws(fn(null), err, 'throws with null as argument')
    t.throws(fn(NaN), err, 'throws with NaN as argument')
    t.throws(fn(false), err, 'throws with false as argument')
    t.throws(fn(true), err, 'throws with true as argument')
    t.throws(fn(x => x), err, 'throws with empty string as argument')
    t.throws(fn(1.234), err, 'throws with float as argument')
    t.throws(fn({}), err, 'throws with object as argument')
    t.throws(fn([]), err, 'throws with Array as argument')

    t.equals(toUpperCase('testing'), 'TESTING', 'works as expected')

    t.end()
})