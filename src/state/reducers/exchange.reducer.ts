import { ActionType, createReducer } from 'typesafe-actions'

import { walletActions, exchangeActions } from 'state/actions'
import { Currency, ExchangeMode } from 'state/models'
import { nextCurrency, updateAmounts } from 'state/helpers'

type Action = ActionType<typeof walletActions & typeof exchangeActions>

export type ExchangeState = {
  active: boolean,
  baseAmount: string,
  baseCurrency: Currency,
  error: boolean,
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
  error: true,
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
    targetCurrency: nextCurrency(payload.base, payload.currencies) || payload.currencies[0],
    targets: payload.currencies,
  }))

  .handleAction(exchangeActions.return, () => initialExchangeState)

  .handleAction(exchangeActions.rates, (state, { payload }) => ({
    ...state,
    rates: payload.rates,
    baseCurrency: payload.base,
  }))

  .handleAction(exchangeActions.updateBaseAmount, (state, { payload }) => ({
    ...state,
    ...updateAmounts(state, payload, true),
  }))

  .handleAction(exchangeActions.updateTargetAmount, (state, { payload }) => ({
    ...state,
    ...updateAmounts(state, payload, false),
  }))
  
  .handleAction(walletActions.updateBalances, (state) => ({
    ...state,
    baseAmount: '',
    targetAmount: '',
  }))

  .handleAction(exchangeActions.changeMode, (state) => ({
    ...state,
    baseAmount: '',
    error: true,
    errorText: '',
    mode: state.mode === ExchangeMode.BUY ? ExchangeMode.SELL : ExchangeMode.BUY,
    targetAmount: '',
  }))

  .handleAction(exchangeActions.makeExchange, (state) => ({
    ...state,
    error: true,
  }))

  .handleAction(exchangeActions.changeBaseCurrency, (state, { payload }) => ({
    ...state,
    baseCurrency: payload.selected,
    targetCurrency: payload.selected === state.targetCurrency 
      ? nextCurrency(payload.selected, payload.currencies) || payload.currencies[0]
      : state.targetCurrency,
    targets: payload.currencies,
    baseAmount: '',
    error: true,
    errorText: '',
    targetAmount: '',
  }))

  .handleAction(exchangeActions.changeTargetCurrency, (state, { payload }) => ({
    ...state,
    baseCurrency: payload.selected === state.baseCurrency 
      ? nextCurrency(payload.selected, payload.currencies) || payload.currencies[0] 
      : state.baseCurrency,
    targetCurrency: payload.selected,
    targets: payload.currencies,
    baseAmount: '',
    error: true,
    errorText: '',
    targetAmount: '',
  }))
