import { adjustRates } from 'state/helpers/adjustment.helper';
import { Currency } from 'state/models';

describe('Helpers -> rate adjustment', () => {
  const resultFactory = (index: number, currency = Currency.GBP) => adjustRates(
    currency,
    [Currency.EUR, Currency.GBP, Currency.PLN],
    {[Currency.EUR]: 100, [Currency.PLN]: 200, [Currency.GBP]: 1},
    index,
  );

  it('adds from -0.99 to +0.99 percents adjustment to all rates', () => {
    expect(resultFactory(1)[Currency.EUR] || 0 > 100).toBeTruthy()
    expect(resultFactory(1)[Currency.EUR] || 1000 < 101).toBeTruthy()

    expect(resultFactory(4)[Currency.PLN] || 2000 < 200).toBeTruthy()
    expect(resultFactory(4)[Currency.PLN] || 0 > 198).toBeTruthy()
  });

  it('not adjust base currency', () => {
    expect(resultFactory(5).GBP).toEqual(1)
  });
});