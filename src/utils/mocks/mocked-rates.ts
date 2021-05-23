export const mockedRates = {
  "data": {
      "success": true,
      "timestamp": 1621610524,
      "base": "EUR",
      "date": "2021-05-21",
      "rates": {
          "USD": 1.218895,
          "PLN": 4.497541,
          "GBP": 0.860272,
          "EUR": 1
      }
  },
  "status": 200,
  "statusText": "OK",
  "headers": {
      "content-type": "application/json; Charset=UTF-8",
      "last-modified": "Fri, 21 May 2021 15:22:04 GMT"
  },
  "config": {
      "url": "http://data.fixer.io/api/latest?access_key=4e8faff8b19cdd9877d40145e04b7148",
      "method": "get",
      "headers": {
          "Accept": "application/json, text/plain, */*"
      },
      "params": {
          "symbols": "USD,PLN,GBP,EUR"
      },
      "transformRequest": [
          null
      ],
      "transformResponse": [
          null
      ],
      "timeout": 0,
      "xsrfCookieName": "XSRF-TOKEN",
      "xsrfHeaderName": "X-XSRF-TOKEN",
      "maxContentLength": -1,
      "maxBodyLength": -1,
      "cancelToken": {
          "promise": {}
      }
  },
  "request": {}
}