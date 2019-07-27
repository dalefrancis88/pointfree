import test from 'tape'

import * as root from './'

import split from './split'
import toUpperCase from './toUpperCase'

test('(String) - Index exports', t => {
    t.equals(root.split, split, 'exports the split point-free func')
    t.equals(root.toUpperCase, toUpperCase, 'exports the toUpperCase point-free func')

    t.end()
})