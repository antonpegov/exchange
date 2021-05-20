import { ActionType, createReducer } from 'typesafe-actions'

import { exchangeActions as actions } from 'state/actions/exchange.actions'

export type ExchangeState = {
  rates: any[]
}

export const initialExchangeState: ExchangeState = {
  rates: []
}

export const exchangeReducer = createReducer<ExchangeState, ActionType<typeof actions>>(
  initialExchangeState
)
  .handleAction(actions.rates, (state, { payload }) => ({
    ...state,
    rates: payload
  }))