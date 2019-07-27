import test from 'tape'

import * as root from './'

import every from './array/every'
import split from './string/split'
import toUpperCase from './string/toUpperCase'

test('Library Export', t => {
    t.equals(root.every, every, 'exports every from root')
    t.equals(root.split, split, 'exports split from root')
    t.equals(root.toUpperCase, toUpperCase, 'exports toUpperCase from root')

    t.end()
})