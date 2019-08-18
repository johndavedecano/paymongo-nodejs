const createAuth = (apiKey?: string) => {
  return new Buffer(apiKey + ':').toString('base64')
}

export default createAuth
