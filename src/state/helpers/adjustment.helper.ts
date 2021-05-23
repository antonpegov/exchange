import { Currency } from 'state/models';

const adjust = (initial: number, percentages: number) => 
 +(initial * percentages / 100).toFixed(5)

export const adjustRates = (
  baseCurrency: Currency,
  currencies: Currency[],
  rates: Record<Currency, number>, 
  index: number,
): Record<Currency, number> => {
  currencies.forEach((currency) => {
    if (currency !== baseCurrency) {
      rates[currency] = adjust(
        rates[currency],
        index % 2 === 0 
          ? 100 - +Math.random().toFixed(2)
          : 100 + +Math.random().toFixed(2),
      )
    }
  })
  
  return rates
}