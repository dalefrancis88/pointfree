const isString = str => typeof(str) === 'string'

const split = seperator => str => {
    if(!isString(seperator) || !isString(str)) {
        throw new TypeError('split: strings must be provided for both arguments')
    }

    return str.split(seperator)
}

export default split