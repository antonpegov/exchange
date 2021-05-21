import { createAction } from "typesafe-actions";

export const exchangeActions = {
  init: createAction('@exchange/init')<void>(),
  rates: createAction('@exchange/rates')<any[]>(),

}