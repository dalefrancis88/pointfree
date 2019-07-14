/** @license ISC License (c) copyright 2019 original and current authors */
/** @author Dale Francis (dalefrancis88) */

// isNil :: * -> Boolean
const isNil = value =>
    isNaN(value) || value === undefined || value === null

export default isNil
