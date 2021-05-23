import { AmountUpdatePayload, Currency, ExchangeRates } from 'state/models';
import { createAction } from "typesafe-actions";

export const exchangeActions = {
  init: createAction('@exchange/init')<{ base: Currency, currencies: Currency[] }>(),
  rates: createAction('@exchange/rates')<ExchangeRates>(),

  return: createAction('@exchange/return')<void>(),
  changeMode: createAction('@exchange/changeMode')<void>(),
  makeExchange: createAction('@exchange/makeExchange')<void>(),

  updateBaseAmount: createAction('@exchange/updateBaseAmount')<AmountUpdatePayload>(),
  updateTargetAmount: createAction('@exchange/updateTargetAmount')<AmountUpdatePayload>(),
}
