import { Currency } from 'state/models';
import { createAction } from "typesafe-actions";

export const walletActions = {
  resetBalances: createAction('@wallet/resetBalances')<void>(),
  runExchange: createAction('@wallet/runExchange')<Currency>(),
}
