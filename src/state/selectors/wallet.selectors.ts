import { createSelector } from 'reselect'

import { WalletState } from 'state/reducers/wallet.reducer'
import { RootState } from 'store'

const getWalletState = (state: RootState): WalletState => state.wallet

export const getBalances = createSelector(getWalletState, (state) => state.balances)
export const getCurrencies = createSelector(getWalletState, (state) => state.currencies)