import { toFixed } from 'state/helpers';
import { AmountUpdatePayload, ExchangeMode } from 'state/models';
import { ExchangeState } from 'state/reducers';

export const updateAmounts = (
  { baseAmount, targetAmount, targetCurrency, mode, rates }: ExchangeState,
  { baseBalance, targetBalance, value }: AmountUpdatePayload,
  isBaseAmount: boolean,
): Partial<ExchangeState> => {
  
  let error: boolean
  let newBaseAmount: string
  let newTargetAmount: string
  let errorText = 'Insufficient balance'
  
  if (value.match(/^\d+\.$/g)) {
    error = true
    errorText = ''
    newBaseAmount = isBaseAmount ? value : baseAmount
    newTargetAmount = isBaseAmount ? targetAmount : value
  } else if (value === '') {
    error = true
    errorText = ''
    newBaseAmount = ''
    newTargetAmount = ''
  } else {
    if (isBaseAmount) { 
      if (mode === ExchangeMode.SELL) {
        error = +value > baseBalance
        newBaseAmount = value
        newTargetAmount = toFixed(+value * rates[targetCurrency]).toString()
      } else {
        const newTarget = toFixed(+value * rates[targetCurrency])

        error = newTarget > targetBalance
        newBaseAmount = value
        newTargetAmount = newTarget.toString()
      }
    } else {
      if (mode === ExchangeMode.SELL) {
        const newBase = toFixed(+value / rates[targetCurrency])

        error = newBase > baseBalance
        newBaseAmount = newBase.toString()
        newTargetAmount = value
      } else {
        error = +value > targetBalance
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