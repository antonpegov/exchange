import React from 'react'
import styled from 'styled-components'
import { SyncAlt } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'

import { Currency } from 'state/models/currency'
//#region Styles
const ExchangeButton = styled(IconButton)`
  color: lightcoral !important;
  position: relative;
  top: -3px;
`
const Wrapper = styled.div` 
  font-size: 20px;
  margin: 0 10px;
`
//#endregion
export const componentId = 'WalletRow'

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
      <ExchangeButton  data-testid="ExchangeButton" onClick={onExchangeClick}>
        <SyncAlt />
      </ExchangeButton>

      <span data-testid="Balance">
        <b data-testid="Currency">{currency}</b> {balance}
      </span>
    </Wrapper>
  )
};