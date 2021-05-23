
//#region Imports
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { Button, Fab, IconButton, InputAdornment, TextField } from '@material-ui/core'
import { ArrowUpwardRounded, ArrowDownwardRounded, ExpandMore } from '@material-ui/icons'

import { ButtonsWraper, Title } from 'shared/components'

import { getBalances, getBaseAmount, getBaseCurrency, getErrorText, getIsLowBalance, getMode, getRate, getTargetAmount, getTargetCurrency } from 'state/selectors'
import { exchangeActions } from 'state/actions/exchange.actions'
import { ExchangeMode } from 'state/models'

export const componentId = 'Exchange'
//#endregion
//#region Styles
const Wrapper = styled.form`
  position: relative;
`

const Rate = styled.div`
  color: lightcoral;
  display: flex;
  font-weight: 600;
  justify-content: center;
`
const Amount = styled(TextField)`
  display: flex !important;
  margin-bottom: 10px !important;
`
const Balance = styled.div`
  color: lightcoral;
  display: flex;
  font-size: 12px;
  justify-content: flex-end;
  position: relative;
  right: 0px;
  top: -8px;
  width: 100%;
`
const Error = styled.div<{visible: boolean}>` 
  color: red;
  display: ${props => props.visible ? 'flex' : 'none'};
  justify-content: center;
  font-weight: 600;
  font-size: 14px;
  position: absolute;
  width: 100%;
`
const Direction = styled(Fab)`
  background-color: aliceblue !important;
  color: lightcoral !important;
  position: absolute !important;
  height: 40px;
  width: 40px;
  top: 130px;
  left: 175px;
  z-index: 100;
`
//#endregion

export type ExchangeProps = { }

export const Exchange: React.FC<ExchangeProps> = () => {
  const dispatch = useDispatch()

  const balances = useSelector(getBalances)
  const baseAmount = useSelector(getBaseAmount)
  const baseCurrency = useSelector(getBaseCurrency)
  const errorText = useSelector(getErrorText)
  const isLowBalance = useSelector(getIsLowBalance)
  const mode = useSelector(getMode)
  const rate = useSelector(getRate)
  const targetAmount = useSelector(getTargetAmount)
  const targetCurrency = useSelector(getTargetCurrency)

  const [submitButtonLabel, setSubmitButtonLabel] = useState('')

  useEffect(() => {
    const word = mode === ExchangeMode.SELL ? 'for' : 'with'
    
    setSubmitButtonLabel(`${mode} ${baseCurrency} ${word} ${targetCurrency}`)
  }, [mode, baseCurrency, targetCurrency])

  const handleBaseCurrensyChange = () => { console.log('boom') }
  const handleTargetCurrensyChange  = () => { console.log('badaboom') }

  const handleBaseAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (/^\d+(\.([0-9]([0-9])?)?)?$/.test(event.target.value)) {
      dispatch(exchangeActions.updateBaseAmount({
        value: event.target.value, 
        balance: balances[baseCurrency],
      }))
    }
  }
  const handleTargetAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (/^\d+(\.([0-9]([0-9])?)?)?$/.test(event.target.value)) {
      dispatch(exchangeActions.updateTargetAmount({
        value: event.target.value, 
        balance: balances[targetCurrency],
      }))
    }
  }
  
  return (
    <Wrapper data-testid={componentId} autoComplete="off">
      <Title data-testid="Title"> {mode} {baseCurrency}</Title>

      <Rate data-testid="Rate"> 1 {baseCurrency} = {rate} {targetCurrency}</Rate>

      <Amount
        data-testid="baseAmount"
        id="baseAmount"
        label={baseCurrency}
        value={baseAmount}
        onChange={handleBaseAmountChange}
        InputProps={{
          endAdornment:
            <InputAdornment position="end" title="Change base currency" style={{'position': 'relative', 'left': '10px',}}>
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleBaseCurrensyChange}
              >
                <ExpandMore />
              </IconButton>
            </InputAdornment>
        }}
      />

      <Balance>Balance: {balances[baseCurrency]} {baseCurrency}</Balance>

      <Direction onClick={() => dispatch(exchangeActions.changeMode())}>
        {mode === ExchangeMode.SELL 
          ? <ArrowDownwardRounded />
          : <ArrowUpwardRounded />
        }
      </Direction>

      <Amount
        data-testid="targetAmount"
        id="targetAmount"
        label={targetCurrency}
        value={targetAmount}
        style={{marginTop: '15px'}}
        onChange={handleTargetAmountChange}
        InputProps={{
          endAdornment:
            <InputAdornment position="end" title="Change target currency" style={{'position': 'relative', 'left': '10px',}}>
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleTargetCurrensyChange}
              >
                <ExpandMore />
              </IconButton>
            </InputAdornment>
        }}
      />

      <Balance>Balance: {balances[targetCurrency]} {targetCurrency}</Balance>

      <Error visible={isLowBalance}>{errorText}</Error>

      <ButtonsWraper>
        <Button
          color="primary"
          data-testid="ReturnButton"
          onClick={() => dispatch(exchangeActions.return())}
          variant="contained"
        >
          Return
        </Button>

        <Button
          color="primary"
          data-testid="SubmitButton"
          disabled={isLowBalance}
          onClick={() => dispatch(exchangeActions.makeExchange())}
          style={{'flexGrow': 1}}
          variant="contained"
        >
          {submitButtonLabel}
        </Button>
      </ButtonsWraper>
    </Wrapper>
  )
};