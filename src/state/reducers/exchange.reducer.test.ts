import { deepFreeze } from 'utils'

import { exchangeReducer, ExchangeState, initialExchangeState, allCurrencies } from 'state/reducers'
import { exchangeActions, walletActions } from 'state/actions'
import { Currency } from 'state/models'

describe('Exchange reducer', () => {
  describe('handles `exchangeActions.init` action', () => {
    let initialState: ExchangeState;
    let state: ExchangeState;
    
    beforeEach(() => {
      initialState = deepFreeze({
        ...initialExchangeState
      })

      state = exchangeReducer(initialState, exchangeActions.init({
        base: Currency.PLN, 
        currencies: allCurrencies,
      }))
    })

    it('set active flag to TRUE', () => {

      expect(state.active).toBe(true)
    })

    it('updates base currency', () => {
      
      expect(state.baseCurrency).toBe(Currency.PLN)
    })

    it('sets target currency', () => {
      
      expect(state.targetCurrency).toBe(Currency.USD)
    })

    it('copying currency list from wallet state', () => {
      
      expect(state.targets).toEqual(allCurrencies)
    })
  })

  describe('handles `exchangeActions.return` action', () => {
    let initialState: ExchangeState;
    let state: ExchangeState;
    
    beforeEach(() => {
      initialState = deepFreeze({
        ...initialExchangeState,
        active: true,
      })

      state = exchangeReducer(initialState, exchangeActions.return())
    })

    it('returns initial state', () => {

      expect(state.active).toBe(false)
    })
  })
})