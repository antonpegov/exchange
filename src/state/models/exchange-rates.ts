import { Currency } from 'state/models/currencies';

export type ExchangeRates = {
  base: Currency,
  rates: Record<Currency, number>
}