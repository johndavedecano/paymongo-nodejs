# paymongo-nodejs

Paymongo client for nodejs. 

**THIS IS CURRENTLY UNDER DEVELOPMENT DO NOT USE IN PRODUCTION YET**

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




