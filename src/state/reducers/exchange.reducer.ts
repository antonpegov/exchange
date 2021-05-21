import { ActionType, createReducer } from 'typesafe-actions'

import { exchangeActions } from 'state/actions/exchange.actions'
import { walletActions } from 'state/actions/wallet.actions'
import { Currency } from 'state/models'

export type Action = ActionType<typeof walletActions & typeof exchangeActions>

export type ExchangeState = {
  rates: Record<Currency, number>,
  activeCurrency: Currency,
}

export const initialExchangeState: ExchangeState = {
  rates: {} as Record<Currency, number>,
  activeCurrency: Currency.EUR,
}

export const exchangeReducer = createReducer<ExchangeState, Action>(
  initialExchangeState
)
  .handleAction(exchangeActions.rates, (state, { payload }) => ({
    ...state,
    rates: payload.rates,
    activeCurrency: payload.base,
  }))
  