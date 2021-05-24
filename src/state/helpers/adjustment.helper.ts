import { Currency } from 'state/models';

const adjust = (initial: number, percentages: number) => 
 +(initial * percentages / 100).toFixed(5)

export const adjustRates = (
  baseCurrency: Currency,
  currencies: Partial<Currency[]>,
  rates: Partial<Record<Currency, number>>, 
  index: number,
): Partial<Record<Currency, number>> => {
  for (const currency of currencies) {
    if (!!currency && currency !== baseCurrency) {
      const rate = rates[currency];

      if (rate) {
        rates[currency] = adjust(
          rate,
          index % 2 === 0 
            ? 100 - +Math.random().toFixed(2)
            : 100 + +Math.random().toFixed(2),
        )
      }
    }
  }

  return rates
}