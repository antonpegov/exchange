import { Currency } from 'state/models/currency';

export type ExchangeRates = {
  base: Currency,
  rates: Record<Currency, number>
}