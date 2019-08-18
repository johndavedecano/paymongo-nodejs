import ObjectType from '../enums/ObjectType'

export interface PaymentSource {
  id: string
  type: ObjectType
}

interface CreatePaymentContract {
  amount: number
  currency: string
  description?: string
  statement_descriptor?: string
  source: PaymentSource
}

export default CreatePaymentContract
