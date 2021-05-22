import { nextCurrency } from 'state/helpers/target-currency.helper';
import { Currency } from 'state/models';

const currencies: Currency[] = [
  Currency.PLN,
  Currency.EUR,
  Currency.GBP
]

fdescribe('Target currency select helper', () => {
  it('returns first currency after base one', () => {

    expect(nextCurrency(Currency.EUR, currencies)).toBe(Currency.GBP)
  });

  it('returns first currency in the array if last one is passed', () => {

    expect(nextCurrency(Currency.GBP, currencies)).toBe(Currency.PLN)
  });

  it('trows Error if passed base currency is not present in the array', () => {

    expect(() => nextCurrency(Currency.USD, currencies)).toThrow(TypeError)
  });
});