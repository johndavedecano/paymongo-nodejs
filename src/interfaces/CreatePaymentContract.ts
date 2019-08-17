import Type from '../enums/Type'
export interface PaymentSource {
  id: string
  type: Type
}

interface CreatePaymentContract {
  amount: number
  currency: string
  description?: string
  statement_descriptor?: string
  source: PaymentSource
}

export default CreatePaymentContract
