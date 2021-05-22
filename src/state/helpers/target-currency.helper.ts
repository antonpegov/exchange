import { Currency } from 'state/models';

export const nextCurrency = (baseCurrency: Currency, currencies: Currency[]): Currency | void => {
  const baseCurrencyIndex = currencies.findIndex((item) => item === baseCurrency);
  const isLastIndex = baseCurrencyIndex + 1 === currencies.length

  if (baseCurrencyIndex < 0) {
    throw new TypeError('Base currency is not in the list')
  }

  return isLastIndex ? currencies[0] : currencies[baseCurrencyIndex + 1] 
}
