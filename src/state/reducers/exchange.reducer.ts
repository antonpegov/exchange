import { ActionType, createReducer } from 'typesafe-actions'

import { walletActions, exchangeActions } from 'state/actions'
import { Currency, ExchangeMode } from 'state/models'
import { nextCurrency, toFixed } from 'state/helpers'

type Action = ActionType<typeof walletActions & typeof exchangeActions>

export type ExchangeState = {
  active: boolean,
  baseAmount: string,
  baseCurrency: Currency,
  isLowBalance: boolean,
  errorText: string,
  mode: ExchangeMode,
  rates: Record<Currency, number>,
  targetAmount: string,
  targetCurrency: Currency,
  targets: Currency[],
}

export const initialExchangeState: ExchangeState = {
  active: false,
  baseAmount: '',
  baseCurrency: Currency.EUR,
  isLowBalance: true,
  errorText: '',
  mode: ExchangeMode.SELL,
  rates: {} as Record<Currency, number>,
  targetAmount: '',
  targetCurrency: Currency.USD,
  targets: [],
}

export const exchangeReducer = createReducer<ExchangeState, Action>(
  initialExchangeState
)
  .handleAction(exchangeActions.init, (state, { payload }) => ({
    ...state,
    active: true,
    baseCurrency: payload.base,
    targetCurrency: nextCurrency(payload.base, payload.currencies) || payload.base,
    targets: payload.currencies.filter(item => item !== payload.base)
  }))

  .handleAction(exchangeActions.return, () => initialExchangeState)

  .handleAction(exchangeActions.rates, (state, { payload }) => ({
    ...state,
    rates: payload.rates,
    baseCurrency: payload.base,
  }))

  .handleAction(exchangeActions.updateBaseAmount, (state, { payload }) => ({
    ...state,
    baseAmount: payload.value,
    targetAmount: isNaN(+payload.value) ? state.targetAmount : toFixed(+payload.value * state.rates[state.targetCurrency]),
    isLowBalance: isNaN(+payload.value) || +payload.value > payload.balance,
    errorText: isNaN(+payload.value) ? '' : 'Insufficient balance',
  }))

  .handleAction(exchangeActions.updateTargetAmount, (state, { payload }) => ({
    ...state,
    baseAmount: isNaN(+payload.value) ? state.baseAmount : toFixed(+payload.value / state.rates[state.targetCurrency]),
    targetAmount: payload.value,
    isLowBalance: isNaN(+payload.value) || +payload.value > payload.balance,
    errorText: isNaN(+payload.value) ? '' : 'Insufficient balance',
  }))
  
  .handleAction(walletActions.updateBalances, (state) => ({
    ...state,
    baseAmount: '',
    targetAmount: '',
  }))