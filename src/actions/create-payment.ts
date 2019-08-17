import request from 'request-promise'

import { RequestResponse } from 'request'

import { API_URL, API_VERSION } from '../config'

import createAuth from './../create-auth'

import PaymentException from '../exceptions/payment-exception'

const createPayment = async (
  attributes: {},
  secretKey?: string
) => {
  try {
    const response: RequestResponse = await request({
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

    return response.body.data
  } catch (err) {
    throw new PaymentException(err.messsage)
  }
}

export default createPayment
