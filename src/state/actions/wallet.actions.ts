import { createAction } from 'typesafe-actions'

import { Currency } from 'state/models'

export const walletActions = {
  resetBalances: createAction('@wallet/resetBalances')<void>(),
  runExchange: createAction('@wallet/runExchange')<Currency>(),
  updateBalances: createAction('@wallet/updateBalances')<Record<Currency, number>>(),
}
