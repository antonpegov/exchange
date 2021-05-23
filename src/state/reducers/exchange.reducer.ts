import { ActionType, createReducer } from 'typesafe-actions'

import { nextCurrency, updateAmountsOnInputChange, updateAmountsOnRatesChange } from 'state/helpers'
import { walletActions, exchangeActions } from 'state/actions'
import { Amount, Currency, ExchangeMode } from 'state/models'

type Action = ActionType<typeof walletActions & typeof exchangeActions>

export type ExchangeState = {
  active: boolean,
  activeInput: Amount | null,
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
  activeInput: null,
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
//#region Exchange actions
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
    ...updateAmountsOnRatesChange(state, payload),
  }))

  .handleAction(exchangeActions.updateBaseAmount, (state, { payload }) => ({
    ...state,
    ...updateAmountsOnInputChange(state, payload, Amount.BASE),
  }))

  .handleAction(exchangeActions.updateTargetAmount, (state, { payload }) => ({
    ...state,
    ...updateAmountsOnInputChange(state, payload, Amount.TARGET),
  }))

  .handleAction(exchangeActions.changeMode, (state) => ({
    ...state,
    activeInput: null,
    baseAmount: '',
    error: true,
    errorText: '',
    mode: state.mode === ExchangeMode.BUY ? ExchangeMode.SELL : ExchangeMode.BUY,
    targetAmount: '',
  }))

  .handleAction(exchangeActions.makeExchange, (state) => ({
    ...state,
    activeInput: null,
    error: true,
    errorText: '',
  }))

  .handleAction(exchangeActions.changeBaseCurrency, (state, { payload }) => ({
    ...state,
    activeInput: null,
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
    activeInput: null,
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
//#endregion
//#region Wallet actions  
  .handleAction(walletActions.updateBalances, (state) => ({
    ...state,
    baseAmount: '',
    targetAmount: '',
  }))
//#endregion