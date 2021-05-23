import { nextCurrency } from 'state/helpers/next-currency.helper';
import { Currency } from 'state/models';

const currencies: Currency[] = [
  Currency.PLN,
  Currency.EUR,
  Currency.GBP
]

describe('Target currency select helper', () => {
  it('returns first currency in the array', () => {

    expect(nextCurrency(Currency.EUR, currencies)).toBe(Currency.PLN)
  });

  it('returns first currency in the array ignoring passed one', () => {

    expect(nextCurrency(Currency.PLN, currencies)).toBe(Currency.EUR)
  });

  it('trows Error if passed base currency is not present in the array', () => {

    expect(() => nextCurrency(Currency.USD, currencies)).toThrow(TypeError)
  });
});