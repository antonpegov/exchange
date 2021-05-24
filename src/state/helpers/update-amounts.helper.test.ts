import { updateAmountsOnInputChange } from 'state/helpers';
import { Amount, AmountUpdatePayload, Currency, ExchangeMode } from 'state/models';
import { ExchangeState } from 'state/reducers';

describe('Helpers -> Update amounts', () => {
  type ExchangeStateSlice = Pick<
    ExchangeState,
    'baseAmount' |
    'targetAmount' | 
    'baseCurrency' |
    'targetCurrency' | 
    'mode' | 
    'rates'
  >

  describe('updateAmountsOnInputChange', () => {
    const stateSlice: ExchangeStateSlice = {
      baseAmount: '1',
      targetAmount: '2',
      baseCurrency: Currency.EUR,
      targetCurrency: Currency.USD,
      mode: ExchangeMode.SELL,
      rates: {
        [Currency.EUR]: 1,
        [Currency.USD]: 1.3
      } as Record<Currency, number>
    }

    const payload: AmountUpdatePayload = {
      baseBalance: 100,
      targetBalance: 200,
      value: '10',
    }

    const resultFuctory = (
      stateSlice: ExchangeState, 
      actinPayload: AmountUpdatePayload,
      source = Amount.BASE,
    ) => 
      updateAmountsOnInputChange(stateSlice, actinPayload, source)
    
      it('clears amounts and error state gets "" from the action value', () => {
        const result = resultFuctory(
          { 
            ...stateSlice,
            error: false,
            errorText: 'some text' 
          } as ExchangeState,
          { ...payload, value: '' },
        )

        expect(result.baseAmount).toBe('')
        expect(result.targetAmount).toBe('')
        expect(result.error).toBe(true)
        expect(result.errorText).toBe('')
      });

      it('when gets "34."-like action value, pass it as is, resets error and not affects another amount', () => {
        const resultOnBaseAmountChange = resultFuctory(
          { 
            ...stateSlice,
            error: false,
            errorText: 'some text' 
          } as ExchangeState,
          { ...payload, value: '33.' },
        )

        expect(resultOnBaseAmountChange.baseAmount).toBe('33.')
        expect(resultOnBaseAmountChange.targetAmount).toBe('2')
        expect(resultOnBaseAmountChange.error).toBe(true)
        expect(resultOnBaseAmountChange.errorText).toBe('')

        const resultOnTargetAmountChange = resultFuctory(
          { 
            ...stateSlice,
            error: false,
            errorText: 'some text' 
          } as ExchangeState,
          { ...payload, value: '33.' },
          Amount.TARGET,
        )

        expect(resultOnTargetAmountChange.baseAmount).toBe('1')
        expect(resultOnTargetAmountChange.targetAmount).toBe('33.')
        expect(resultOnTargetAmountChange.error).toBe(true)
        expect(resultOnTargetAmountChange.errorText).toBe('')
      });

      // ...etc
  })
});