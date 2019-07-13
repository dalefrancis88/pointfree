import identity from './identity'

const smashData = [undefined, null, 0, 1, '', 'string', false, true, [], {}]

describe('identity', () => {
    it('should exist', () => {
        expect(identity).toBeDefined()
    })

    smashData.forEach(value => {
        it(`should return ${JSON.stringify(value)} when value is ${JSON.stringify(value)}`, () => {
            expect(identity(value)).toStrictEqual(value)
        })
    })
})