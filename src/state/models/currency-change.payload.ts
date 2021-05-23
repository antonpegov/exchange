import { Currency } from 'state/models';

export type CurrencyChangePayload = {
  selected: Currency,
  currencies: Currency[],
}