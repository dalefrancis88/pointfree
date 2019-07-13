import constant from './constant'

import isFunction from './isFunction'

describe('constant', () => {
    it('should exist', () => {
        expect(constant).toBeDefined()
    })
    it('should be a function', () => {
        expect(isFunction(constant)).toBeTrue
    })
    it('should return a function when invoked', () => {
        expect(constant()).toBeTrue
    })
})