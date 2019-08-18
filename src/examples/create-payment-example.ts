import createPayment from '../actions/create-payment'
import ObjectType from '../enums/ObjectType'

// tslint:disable-next-line: no-expression-statement
createPayment({
  amount: 10000,
  currency: 'PHP',
  description: 'Payment for Order #771',
  statement_descriptor: 'Curie Incorporated',
  source: {
    id: 'tok_KwNfGtQfrKt2LeCLAtHoqwVN',
    type: ObjectType.token
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
