import test from 'tape'

import * as root from './'

import every from './every'

test('(Array) - Index exports', t => {
    t.equals(root.every, every, 'exports the every point-free func')

    t.end()
})