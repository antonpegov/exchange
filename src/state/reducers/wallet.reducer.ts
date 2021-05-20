import { ActionType, createReducer } from 'typesafe-actions'

import { walletActions as actions } from 'state/actions/wallet.actions'
import { Currencies } from 'state/models/currencies'

export type WalletState = {
  balances: Record<Currencies, number>
}

const initialBalances: Record<Currencies, number>= {
  [Currencies.USD]: 100,
  [Currencies.EUR]: 200,
  [Currencies.GBP]: 300,
  [Currencies.PLN]: 400,

}

export const initialwalletState: WalletState = {
  balances: initialBalances,
}

export const walletReducer = createReducer<WalletState, ActionType<typeof actions>>(
  initialwalletState
)
  .handleAction(actions.resetAccounts, (state) => ({
    ...state,
    balances: initialBalances
  }))