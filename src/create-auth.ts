const createAuth = (apiKey?: string) => {
  return new Buffer(apiKey + ':')
}

export default createAuth
