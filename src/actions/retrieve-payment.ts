import request from 'request-promise'

import { RequestResponse } from 'request'

import { API_URL, API_VERSION } from '../config'

import createAuth from './../create-auth'

import PaymentException from '../exceptions/payment-exception'

import Payment from '../interfaces/Payment'

const retrievePayment = async (paymentId: string, secretKey?: string) => {
  try {
    const response: RequestResponse = await request({
      headers: {
        Authorization: `Basic ${createAuth(
          secretKey || process.env.PAYMONGO_SECRET_KEY
        )}`
      },
      json: true,
      method: 'GET',
      uri: `${API_URL}/${API_VERSION}/payments/${paymentId}`
    })

    const payment: Payment = response.body.data

    return payment
  } catch (err) {
    throw new PaymentException(err.messsage)
  }
}

export default retrievePayment
