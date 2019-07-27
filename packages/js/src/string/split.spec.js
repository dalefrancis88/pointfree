import test from 'tape'

import split from './split'

import { isFunction } from '@pointfree/core'

const identity = x => x

const createTestable = fn => (...args) => () =>
    fn.apply(null, args)

test('(String) - split', t => {
    const fn = createTestable(split)

    const testData = 'The quick brown fox'
    const testSeperator = ' '

    t.ok(isFunction(split), 'should be a function')

    const err = /^TypeError: split: strings must be provided for both arguments/
    t.throws(fn(undefined)(testData), err, 'throws with undefined as first argument')
    t.throws(fn(null)(testData), err, 'throws with null as first argument')
    t.throws(fn(NaN)(testData), err, 'throws with NaN as first argument')
    t.throws(fn(false)(testData), err, 'throws with false as first argument')
    t.throws(fn(true)(testData), err, 'throws with true as first argument')
    t.throws(fn(1.234)(testData), err, 'throws with float as first argument')
    t.throws(fn({})(testData), err, 'throws with object as first argument')
    t.throws(fn([])(testData), err, 'throws with Array as first argument')
    t.throws(fn(identity)(testSeperator), err, 'throws with Function as second argument')
    
    t.throws(fn(testSeperator)(undefined), err, 'throws with undefined as second argument')
    t.throws(fn(testSeperator)(null), err, 'throws with null as second argument')
    t.throws(fn(testSeperator)(NaN), err, 'throws with NaN as second argument')
    t.throws(fn(testSeperator)(false), err, 'throws with false as second argument')
    t.throws(fn(testSeperator)(true), err, 'throws with true as second argument')
    t.throws(fn(testSeperator)(1.234), err, 'throws with float as second argument')
    t.throws(fn(testSeperator)({}), err, 'throws with object as second argument')
    t.throws(fn(testSeperator)([]), err, 'throws with Array as second argument')
    t.throws(fn(testSeperator)(identity), err, 'throws with Function as second argument')

    t.deepEqual(split(testSeperator)(testData), ['The', 'quick', 'brown', 'fox'], 'works as expected')

    t.end()
})