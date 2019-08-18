const createAuth = (apiKey?: string) => {
  return Buffer.from(apiKey + ':').toString('base64')
}

export default createAuth
