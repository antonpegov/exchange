import { of } from 'rxjs'
import { map, tap } from 'rxjs/operators'

import { Currency, ExchangeRates } from 'state/models'
import { getHTTPData, http, RequestConfig, mockedRates } from 'utils'

const useApiMock = false

export const Api = {
  getRates(baseCurrency: Currency) {
    const url = 'http://data.fixer.io/api/latest?access_key=4e8faff8b19cdd9877d40145e04b7148'
    const config: RequestConfig = {
      params: {
        symbols: 'USD,PLN,GBP,EUR',
        base: baseCurrency,
      },
      headers: {}
    }

    if (useApiMock) {
      return of({ 
        base: mockedRates.data.base,
        rates: mockedRates.data.rates,
      })
    }

    return http()
      .get<ExchangeRates>(url, config)
      .pipe(
        getHTTPData(),
        map(({ base, rates }) => ({base, rates})),
      )
  },
}
