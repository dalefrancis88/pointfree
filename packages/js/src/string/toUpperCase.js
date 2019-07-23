const isString = str => typeof(str) === 'string'

const toUpperCase = str => {
    if(!isString(str)) {
        throw new TypeError('toUpperCase: a string must be provided')
    }

    return str.toUpperCase()
}

export default toUpperCase