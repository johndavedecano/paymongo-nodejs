import BillingAddress from './BillingAddress'

interface CreateCardTokenContract {
  number: string
  exp_month: number
  exp_year: number
  cvc: string
  billing?: BillingAddress
}

export default CreateCardTokenContract
