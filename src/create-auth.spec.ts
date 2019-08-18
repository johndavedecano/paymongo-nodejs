import test from 'ava'

import createAuth from './create-auth'

// tslint:disable-next-line:no-expression-statement
test('checks if returns a valid string', t => {
  // tslint:disable-next-line:no-expression-statement
  const str = typeof createAuth('username')
  // tslint:disable-next-line:no-expression-statement
  t.is(str, 'string')
})
