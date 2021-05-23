import { Currency } from 'state/models';

export const nextCurrency = (baseCurrency: Currency, currencies: Currency[]): Currency | void => {
  const baseCurrencyIndex = currencies.findIndex((item) => item === baseCurrency);

  if (baseCurrencyIndex < 0) {
    throw new TypeError('Base currency is not in the list')
  }

  return baseCurrencyIndex === 0 ? currencies[1] : currencies[0] 
}
