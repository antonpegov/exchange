import { AmountUpdatePayload, Currency, ExchangeRates } from 'state/models';
import { createAction } from "typesafe-actions";

export const exchangeActions = {
  init: createAction('@exchange/init')<{ base: Currency, currencies: Currency[] }>(),
  rates: createAction('@exchange/rates')<ExchangeRates>(),

  changeMode: createAction('@exchange/changeMode')<void>(),
  changeBaseCurrency: createAction('@exchange/changeBaseCurrency')<Currency>(),
  changeTargetCurrency: createAction('@exchange/changeBaseCurrency')<Currency>(),
  
  return: createAction('@exchange/return')<void>(),
  makeExchange: createAction('@exchange/makeExchange')<void>(),
  
  updateBaseAmount: createAction('@exchange/updateBaseAmount')<AmountUpdatePayload>(),
  updateTargetAmount: createAction('@exchange/updateTargetAmount')<AmountUpdatePayload>(),
}
