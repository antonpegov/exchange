//#region Imports
import React from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'

import { getBalances, getCurrencies } from 'state/selectors'
import { ButtonsWraper, Title } from 'shared/components'
import { walletActions } from 'state/actions/wallet.actions'
import { WalletRow } from 'components'

export const componentId = 'Wallet'
export const componentTitle = 'Balances'
//#endregion
//#region Styles
const Balances = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: -30px;
`

const FullWidthButton = styled(Button)`
  width: 100%;
`
//#endregion

export type WalletProps = { }

export const Wallet: React.FC<WalletProps> = () => {
  const dispatch = useDispatch()
  const balances = useSelector(getBalances)
  const currencies = useSelector(getCurrencies)

  return (
    <div data-testid={componentId}>
      <Title data-testid="Title"> {componentTitle} </Title>

      <Balances data-testid="Balances">
        {currencies.map((currency, index) => (
          <WalletRow 
            key={index}
            balance={balances[currency]}
            currency={currency}  
            onExchangeClick={() => dispatch(walletActions.runExchange(currency))}
          />
        ))}
      </Balances>

      <ButtonsWraper>
        <FullWidthButton
          data-testid="ResetButton"
          onClick={() => dispatch(walletActions.resetBalances())}
          color="primary"
          variant="contained"
        >
          Reset balances to initial state
        </FullWidthButton>
      </ButtonsWraper>
    </div>
  )
};