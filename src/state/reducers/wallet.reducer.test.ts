import { deepFreeze } from 'utils'

import { initialWalletState, walletReducer, WalletState } from 'state/reducers'
import { walletActions } from 'state/actions'
import { Currency } from 'state/models'

describe('Wallet reducer', () => {
  it('handles `resetBalances` action and returns initial balances', () => {
    const initialState: WalletState = deepFreeze({
      ...initialWalletState,
      balances: {
        ...initialWalletState.balances,
        [Currency.EUR]: 200
      }
    })
    
    const state = walletReducer(initialState, walletActions.resetBalances())

    expect(state.balances.EUR).toBe(100)
  })
})