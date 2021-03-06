# paymongo-nodejs

[![Known Vulnerabilities](https://snyk.io//test/github/johndavedecano/paymongo-nodejs/badge.svg?targetFile=package.json)](https://snyk.io//test/github/johndavedecano/paymongo-nodejs?targetFile=package.json)

[![GitHub issues](https://img.shields.io/github/issues/johndavedecano/paymongo-nodejs)](https://github.com/johndavedecano/paymongo-nodejs/issues)

[![GitHub stars](https://img.shields.io/github/stars/johndavedecano/paymongo-nodejs)](https://github.com/johndavedecano/paymongo-nodejs/stargazers)

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


[![NPM](https://nodei.co/npm/paymongo-nodejs.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/paymongo-nodejs/)



