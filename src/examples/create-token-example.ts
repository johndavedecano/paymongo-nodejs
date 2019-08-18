import createToken from '../actions/create-token'

// tslint:disable-next-line: no-expression-statement
createToken({
  number: '4242424242424242',
  exp_month: 1,
  exp_year: 22,
  cvc: '201',
  billing: {
    address: {
      line1: '111',
      line2: 'Wanchan St',
      city: 'Furview',
      state: 'Metro Manila',
      postal_code: '11111',
      country: 'PH'
    },
    name: 'Zooey Doge',
    email: 'zdoge@doggo.net',
    phone: '09171234567'
  }
})
  .then(res => {
    // tslint:disable-next-line:no-console
    console.log(res)
  })
  .catch(err => {
    // tslint:disable-next-line:no-console
    console.error(err)
  })
