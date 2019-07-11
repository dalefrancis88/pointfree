import level from './level'

export const identity = x => x
export const constant = x => () => x
export const level2 = {
    ...level,
    age: 34
}