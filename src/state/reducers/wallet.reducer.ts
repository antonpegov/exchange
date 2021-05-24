import { ActionType, createReducer } from 'typesafe-actions'

import { walletActions, exchangeActions } from 'state/actions'
import { Currency } from 'state/models'

type Action = ActionType<typeof walletActions & typeof exchangeActions>

export type WalletState = {
  balances: Record<Currency, number>,
  currencies: Currency[],
}

export const initialBalances: Record<Currency, number> = {
  [Currency.USD]: 100,
  [Currency.EUR]: 200,
  [Currency.GBP]: 300,
  [Currency.PLN]: 400,
}

export const allCurrencies = [Currency.USD, Currency.EUR, Currency.GBP, Currency.PLN];

export const initialWalletState: WalletState = {
  balances: initialBalances,
  currencies: allCurrencies,
}

export const walletReducer = createReducer<WalletState, Action>(
  initialWalletState
)
  .handleAction(walletActions.resetBalances, (state) => ({
    ...state,
    balances: { ...initialBalances },
  }))

  .handleAction(walletActions.updateBalances, (state, { payload }) => ({
    ...state,
    balances: payload,
  }))