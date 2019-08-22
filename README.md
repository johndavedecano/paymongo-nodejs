# paymongo-nodejs

[![Known Vulnerabilities](https://snyk.io//test/github/johndavedecano/paymongo-nodejs/badge.svg?targetFile=package.json)](https://snyk.io//test/github/johndavedecano/paymongo-nodejs?targetFile=package.json)

Paymongo client for nodejs.

```
npm install paymongo-nodejs --save
yarn add paymongo-nodejs
```

```
import {
  createPayment,
  retrievePayment,
  listAllPayments,
  retriveToken,
  createToken
} from 'paymongo-nodejs'
```

Read the API documentation at https://developers.paymongo.com/reference#getting-started-with-your-api


## Authentication

Uses the following environment variables.

```
PAYMONGO_SECRET_KEY=
PAYMONGO_API_VERSION=v1
```




