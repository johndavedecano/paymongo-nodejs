import request from 'request-promise'

import Response from '../interfaces/Response'

import { API_URL, API_VERSION } from '../config'

import createAuth from '../create-auth'

import PaymentException from './../exceptions/payment-exception'

import Payment from '../interfaces/Payment'

const listAllPayments = async (secretKey?: string) => {
  try {
    const response: Response = await request({
      headers: {
        Authorization: `Basic ${createAuth(
          secretKey || process.env.PAYMONGO_SECRET_KEY
        )}`
      },
      json: true,
      method: 'GET',
      uri: `${API_URL}/${API_VERSION}/payments`
    })

    const payments: readonly Payment[] = response.data

    return payments
  } catch (err) {
    throw new PaymentException(err.message)
  }
}

export default listAllPayments
