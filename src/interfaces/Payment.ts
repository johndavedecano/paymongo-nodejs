import BillingAddress from './BillingAddress'

import PaymentStatus from '../enums/PaymentStatus'

import PayoutDataType from '../enums/PayoutDataType'

import ObjectType from '../enums/ObjectType'

export interface PaymentAttribute {
  amount?: number
  billing?: BillingAddress
  created?: number
  currency?: string
  description?: string
  external_reference_number?: string
  fee?: number
  livemode?: boolean
  net_amount?: number
  statement_descriptor?: string
  status?: PaymentStatus
}

export interface PayoutData {
  id?: string
  type?: PayoutDataType
}

export interface Payout {
  data?: PayoutData
}

export interface PaymentRelationship {
  payout?: Payout
  source?: Payout
}

interface Payment {
  id?: string
  type?: ObjectType
  attributes?: PaymentAttribute
  relationships?: PaymentRelationship
}

export default Payment
