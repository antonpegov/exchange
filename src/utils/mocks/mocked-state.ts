import { ExchangeState, initialExchangeState, initialWalletState, WalletState } from 'state/reducers';

export const mockedState: {
  wallet: Partial<WalletState>
  exchange: Partial<ExchangeState>
} = {
  wallet: initialWalletState,
  exchange: initialExchangeState,
}