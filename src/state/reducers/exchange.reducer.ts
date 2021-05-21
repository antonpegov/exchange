import { ActionType, createReducer } from 'typesafe-actions'

import { walletActions } from 'state/actions/wallet.actions'
import { exchangeActions } from 'state/actions/exchange.actions'
import { Currency, ExchangeMode } from 'state/models'

export type Action = ActionType<typeof walletActions & typeof exchangeActions>

export type ExchangeState = {
  activeCurrency: Currency,
  rates: Record<Currency, number>,
  mode: ExchangeMode,
}

export const initialExchangeState: ExchangeState = {
  rates: {} as Record<Currency, number>,
  activeCurrency: Currency.EUR,
  mode: ExchangeMode.SELL,
}

export const exchangeReducer = createReducer<ExchangeState, Action>(
  initialExchangeState
)
  .handleAction(exchangeActions.rates, (state, { payload }) => ({
    ...state,
    rates: payload.rates,
    activeCurrency: payload.base,
  }))
  