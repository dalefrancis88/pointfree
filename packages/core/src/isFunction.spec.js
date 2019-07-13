import isFunction from './isFunction'

const smashData = [undefined, null, 0, 1, '', 'string', false, true, [], {}]

describe('isFunction', () => {
    it('should exist', expect(isFunction).toBeDefined)
    it('should return true for function', () => {
        expect(isFunction(() => { })).toBe.true
    })

    smashData.forEach(value => {
        it(`should handle false when value is ${JSON.stringify(value)}`, () => {
            expect(isFunction(value)).toBe.false
        })
    });
})