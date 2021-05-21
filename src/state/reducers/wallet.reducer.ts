import { ActionType, createReducer } from 'typesafe-actions'

import { walletActions as actions } from 'state/actions/wallet.actions'
import { Currency } from 'state/models/currencies'

export type WalletState = {
  balances: Record<Currency, number>,
  currencies: Currency[],
}

export const initialBalances: Record<Currency, number>= {
  [Currency.USD]: 100,
  [Currency.EUR]: 200,
  [Currency.GBP]: 300,
  [Currency.PLN]: 400,

}

export const initialwalletState: WalletState = {
  balances: initialBalances,
  currencies: [Currency.USD, Currency.EUR, Currency.GBP, Currency.PLN],
}

export const walletReducer = createReducer<WalletState, ActionType<typeof actions>>(
  initialwalletState
)
  .handleAction(actions.resetBalances, (state) => ({
    ...state,
    balances: initialBalances
  }))