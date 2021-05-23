import { toFixed } from 'state/helpers';
import { AmountUpdatePayload, ExchangeMode } from 'state/models';
import { ExchangeState } from 'state/reducers';

export const updateAmounts = (
  { baseAmount, targetAmount, baseCurrency, targetCurrency, mode, rates }: ExchangeState,
  { baseBalance, targetBalance, value }: AmountUpdatePayload,
  isBaseAmount: boolean,
): Partial<ExchangeState> => {
  
  let error: boolean
  let newBaseAmount: string
  let newTargetAmount: string
  let errorText = ''
  
  if (value.match(/^\d+\.$/g)) {
    error = true
    newBaseAmount = isBaseAmount ? value : baseAmount
    newTargetAmount = isBaseAmount ? targetAmount : value
  } else if (value === '') {
    error = true
    newBaseAmount = ''
    newTargetAmount = ''
  } else {
    if (isBaseAmount) { 
      if (mode === ExchangeMode.SELL) {
        error = +value > baseBalance
        errorText = `Insufficient ${baseCurrency} balance`
        newBaseAmount = value
        newTargetAmount = toFixed(+value * rates[targetCurrency]).toString()
      } else {
        const newTarget = toFixed(+value * rates[targetCurrency])

        error = newTarget > targetBalance
        errorText = `Insufficient ${targetCurrency} balance`
        newBaseAmount = value
        newTargetAmount = newTarget.toString()
      }
    } else {
      if (mode === ExchangeMode.SELL) {
        const newBase = toFixed(+value / rates[targetCurrency])

        error = newBase > baseBalance
        errorText = `Insufficient ${baseCurrency} balance`
        newBaseAmount = newBase.toString()
        newTargetAmount = value
      } else {
        error = +value > targetBalance
        errorText = `Insufficient ${targetCurrency} balance`
        newBaseAmount = toFixed(+value / rates[targetCurrency]).toString()
        newTargetAmount = value
      }
    }
  }

  return {
    baseAmount: newBaseAmount,
    targetAmount: newTargetAmount,
    error,
    errorText,
  }
}