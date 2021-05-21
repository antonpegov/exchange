import { ExchangeState, initialBalances, initialwalletState, WalletState } from 'state/reducers';

export const mockedState: {
  wallet: Partial<WalletState>
  exchange: Partial<ExchangeState>
} = {
  wallet: initialwalletState,
  exchange: {
  },
}