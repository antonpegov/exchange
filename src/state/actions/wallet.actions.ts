import { createAction } from "typesafe-actions";

export const walletActions = {
  resetAccounts: createAction('@wallet/resetAccounts')<void>(),
}