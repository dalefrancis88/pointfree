import test from 'tape'

import every from './every'

import { isFunction } from '@pointfree/core'

const createTestable = fn => (...args) => () =>
    fn.apply(null, args)

test('(Array) - every', t => {
    const fn = createTestable(every)

    const testData = [ 1, 2, 3 ]
    const testFunc = Number.isInteger

    t.ok(isFunction(every), 'should be a function')

    const firstError = /^TypeError: every: first argument must be a function/
    t.throws(fn(undefined, testData), firstError, 'throws with undefined as first argument')
    t.throws(fn(null, testData), firstError, 'throws with null as first argument')
    t.throws(fn(NaN, testData), firstError, 'throws with NaN as first argument')
    t.throws(fn(false, testData), firstError, 'throws with false as first argument')
    t.throws(fn(true, testData), firstError, 'throws with true as first argument')
    t.throws(fn('', testData), firstError, 'throws with empty string as first argument')
    t.throws(fn(1.234, testData), firstError, 'throws with float as first argument')
    t.throws(fn({}, testData), firstError, 'throws with object as first argument')
    t.throws(fn([], testData), firstError, 'throws with Array as first argument')
    
    const secondError = /^TypeError: every: second argument must be an array/
    t.throws(fn(testFunc, undefined), secondError, 'throws with undefined as second argument')
    t.throws(fn(testFunc, null), secondError, 'throws with null as second argument')
    t.throws(fn(testFunc, NaN), secondError, 'throws with NaN as second argument')
    t.throws(fn(testFunc, false), secondError, 'throws with false as second argument')
    t.throws(fn(testFunc, true), secondError, 'throws with true as second argument')
    t.throws(fn(testFunc, ''), secondError, 'throws with empty string as second argument')
    t.throws(fn(testFunc, 1.234), secondError, 'throws with float as second argument')
    t.throws(fn(testFunc, {}), secondError, 'throws with object as second argument')
    t.throws(fn(testFunc, testFunc), secondError, 'throws with Function as second argument')

    t.ok(every(testFunc, testData), 'works as expected')

    t.end()
})