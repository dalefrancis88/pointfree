/** @license ISC License (c) copyright 2019 original and current authors */
/** @author Dale Francis (dalefrancis88) */

import { isFunction } from '@pointfree/core'

// every :: (a -> Boolean) -> Array -> Boolean
const every = (fn, arr) => {
    if(!isFunction(fn)) {
        throw new TypeError('every: first argument must be a function')
    }

    if(!Array.isArray(arr)) {
        throw new TypeError('every: second argument must be an array')
    }

    return arr.every(fn)
}

export default every
