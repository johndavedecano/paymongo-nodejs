import request from 'request-promise'

import { RequestResponse } from 'request'

import { API_URL, API_VERSION } from '../config'

import createAuth from './../create-auth'

import TokenException from '../exceptions/token-exception'

import CardToken from '../interfaces/CardToken'

import CreateCardTokenContract from '../interfaces/CreateCardTokenContract'

const createToken = async (
  attributes: CreateCardTokenContract,
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
      uri: `${API_URL}/${API_VERSION}/tokens`
    })

    const token: CardToken = response.body.data

    return token
  } catch (err) {
    throw new TokenException(err.messsage)
  }
}

export default createToken
