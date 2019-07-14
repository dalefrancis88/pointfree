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
        const invoked = constant()

        expect(isFunction(invoked)).toBeTrue
    })

    it('should return a function when invoked', () => {
        const const3 = constant(3)

        expect(isFunction(const3)).toBeTrue
        expect(const3()).toBe(3)
    })
})