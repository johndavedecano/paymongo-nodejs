import request from 'request-promise'

import { API_URL, API_VERSION } from '../config'

import TokenException from '../exceptions/token-exception'

import CardToken from '../interfaces/CardToken'

import Response from '../interfaces/Response'

import createAuth from '../create-auth'

const retriveToken = async (tokenId: string, secretKey?: string) => {
  try {
    const response: Response = await request({
      headers: {
        Authorization: `Basic ${createAuth(
          secretKey || process.env.PAYMONGO_SECRET_KEY
        )}`
      },
      json: true,
      method: 'GET',
      uri: `${API_URL}/${API_VERSION}/tokens/${tokenId}`
    })
    const token: CardToken = response.data
    return token
  } catch (err) {
    throw new TokenException(err.message)
  }
}

export default retriveToken
