//#region Imports
import React from 'react'
import styled from 'styled-components'
import SyncIcon from '@material-ui/icons/Sync'
import { IconButton } from '@material-ui/core'

import { Currency } from 'state/models/currencies'

export const componentId = 'WalletRow'
//#endregion
//#region Styles
const ExchangeButton = styled(IconButton)`
  color: lightcoral !important;
  position: relative;
  top: -3px;
`
const Wrapper = styled.div` 
  font-size: 20px;
  margin: 0 20px;
`
//#endregion

export type WalletRowProps = { 
  balance: number,
  currency: Currency,
  onExchangeClick: () => void,
}

export const WalletRow: React.FC<WalletRowProps> = ({ 
  balance,
  currency, 
  onExchangeClick 
}) => {

  return (
    <Wrapper data-testid={componentId}>
      <i data-testid="Balance">{balance}</i> 
      {' '}
      <b data-testid="Currency">{currency}</b>
      
      <ExchangeButton  data-testid="ExchangeButton" onClick={onExchangeClick}>
        <SyncIcon />
      </ExchangeButton>
    </Wrapper>
  )
};