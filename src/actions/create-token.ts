import request from 'request-promise'

import { API_URL, API_VERSION } from '../config'

import createAuth from './../create-auth'

import TokenException from '../exceptions/token-exception'

import CardToken from '../interfaces/CardToken'

import CreateCardTokenContract from '../interfaces/CreateCardTokenContract'

import Response from '../interfaces/Response'

const createToken = async (
  attributes: CreateCardTokenContract,
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
      uri: `${API_URL}/${API_VERSION}/tokens`
    })

    const token: CardToken = response.data

    return token
  } catch (err) {
    throw new TokenException(err.message)
  }
}

export default createToken
