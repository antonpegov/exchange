import { Amount, AmountUpdatePayload, ExchangeMode, ExchangeRates } from 'state/models';
import { ExchangeState } from 'state/reducers';
import { toFixed } from 'state/helpers';

export const updateAmountsOnInputChange = (
  { baseAmount, targetAmount, baseCurrency, targetCurrency, mode, rates }: ExchangeState,
  { baseBalance, targetBalance, value }: AmountUpdatePayload,
  source: Amount,
): Partial<ExchangeState> => {
  
  let activeInput: Amount | null = null
  let error = true
  let errorText = ''
  let newBaseAmount: string
  let newTargetAmount: string
  
  if (value.match(/^\d+\.$/g)) {
    newBaseAmount = source === Amount.BASE ? value : baseAmount
    newTargetAmount = source === Amount.BASE ? targetAmount : value
  } else if (value === '') {
    newBaseAmount = ''
    newTargetAmount = ''
  } else {
    activeInput = source
    
    if (source === Amount.BASE) { 
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
    activeInput,
    baseAmount: newBaseAmount,
    targetAmount: newTargetAmount,
    error,
    errorText,
  }
}

export const updateAmountsOnRatesChange = (
  { baseAmount, targetAmount, baseCurrency, targetCurrency, mode, activeInput }: ExchangeState,
  { rates, balances }: ExchangeRates,
): Partial<ExchangeState> => {
  let error: boolean
  let newBaseAmount: string
  let newTargetAmount: string
  let errorText = ''

  if (!activeInput) {
    return {
      rates
    }
  }

  if (activeInput === Amount.BASE) {
    if (mode === ExchangeMode.SELL) {
      error = +baseAmount > balances[baseCurrency]
      errorText = `Insufficient ${baseCurrency} balance`
      newBaseAmount = baseAmount
      newTargetAmount = toFixed(+baseAmount * rates[targetCurrency]).toString()
    } else {
      const newTarget = toFixed(+baseAmount * rates[targetCurrency])

      error = newTarget > balances[targetCurrency]
      errorText = `Insufficient ${targetCurrency} balance`
      newBaseAmount = baseAmount
      newTargetAmount = newTarget.toString()
    }
  } else {
    if (mode === ExchangeMode.SELL) {
      const newBase = toFixed(+targetAmount / rates[targetCurrency])

      error = newBase > balances[baseCurrency]
      errorText = `Insufficient ${baseCurrency} balance`
      newBaseAmount = newBase.toString()
      newTargetAmount = targetAmount
    } else {
      error = +targetAmount > balances[targetCurrency]
      errorText = `Insufficient ${targetCurrency} balance`
      newBaseAmount = toFixed(+targetAmount / rates[targetCurrency]).toString()
      newTargetAmount = targetAmount
    }
  }

  return {
    baseAmount: newBaseAmount,
    targetAmount: newTargetAmount,
    error,
    errorText,
    rates,
  }
}
