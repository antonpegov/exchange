import { createSelector } from 'reselect'

import { ExchangeState } from 'state/reducers'
import { RootState } from 'store'

const getExchangeState = (state: RootState): ExchangeState => state.exchange

export const getMode = createSelector(getExchangeState, (state) => state.mode)
export const getBaseAmount = createSelector(getExchangeState, (state) => state.baseAmount)
export const getBaseCurrency = createSelector(getExchangeState, (state) => state.baseCurrency)
export const getTargetAmount = createSelector(getExchangeState, (state) => state.targetAmount)
export const getTargetCurrency = createSelector(getExchangeState, (state) => state.targetCurrency)

export const getRate = createSelector(getExchangeState, (state) => state.rates[state.targetCurrency])
export const getIsLowBalance = createSelector(getExchangeState, (state) => state.isLowBalance)
export const getErrorText = createSelector(getExchangeState, (state) => state.errorText)

