// tslint:disable-next-line: no-class
class PaymentException extends Error {
  constructor(msg: string) {
    // tslint:disable-next-line: no-expression-statement
    super(msg)
  }
}

export default PaymentException
