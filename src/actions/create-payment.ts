import request from 'request-promise'

import { API_URL, API_VERSION } from '../config'

import createAuth from './../create-auth'

import PaymentException from '../exceptions/payment-exception'

import CreatePaymentContract from '../interfaces/CreatePaymentContract'

import Payment from '../interfaces/Payment'

import Response from '../interfaces/Response'

const createPayment = async (
  attributes: CreatePaymentContract,
  secretKey?: string
) => {
  try {
    const response: Response = await request({
      body: {
        data: {
          attributes
        }
      },
      headers: {
        Authorization: `Basic ${createAuth(
          secretKey || process.env.PAYMONGO_SECRET_KEY
        )}`
      },
      json: true,
      method: 'POST',
      uri: `${API_URL}/${API_VERSION}/payments`
    })

    const payment: Payment = response.data

    return payment
  } catch (err) {
    throw new PaymentException(err.message)
  }
}

export default createPayment
