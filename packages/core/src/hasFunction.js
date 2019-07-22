/** @license ISC License (c) copyright 2019 original and current authors */
/** @author Dale Francis (dalefrancis88) */

import isFunction from './isFunction'
import isNil from './isNil'
import isString from './isString';
import isNumber from './isNumber';

const isValidKey = key => 
    !isNil(key) && (isString(key) || isNumber(key))

// hasFunction :: Function -> Boolean
const hasFunction = (name, m) => {
    if(!isValidKey(name)) {
        throw new TypeError('First argument should be a string or integer')
    }

    return !isNil(m) && isFunction(m[name])
}
    

export default hasFunction
