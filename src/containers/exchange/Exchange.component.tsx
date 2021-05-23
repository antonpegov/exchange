
//#region Imports
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { Button, Fab, MenuItem, TextField } from '@material-ui/core'
import { ArrowUpwardRounded, ArrowDownwardRounded } from '@material-ui/icons'

import { ButtonsWraper, Title } from 'shared/components'

import { getBalances, getBaseAmount, getBaseCurrency, getErrorText, geterror, getMode, getRate, getTargetAmount, getTargetCurrency, getTargets, getCurrencies } from 'state/selectors'
import { Currency, ExchangeMode } from 'state/models'
import { exchangeActions } from 'state/actions'

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
  margin-top: -10px;
`
const Amount = styled.div`
  display: flex;
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
  top: 127px;
  left: 175px;
`
const Selector = styled(TextField)`
  justify-content: flex-end;
  overflow: hidden;
  width: 25px;

`
//#endregion

export type ExchangeProps = { }

export const Exchange: React.FC<ExchangeProps> = () => {
  const dispatch = useDispatch()

  const balances = useSelector(getBalances)
  const baseAmount = useSelector(getBaseAmount)
  const baseCurrency = useSelector(getBaseCurrency)
  const currencies = useSelector(getCurrencies)
  const errorText = useSelector(getErrorText)
  const error = useSelector(geterror)
  const mode = useSelector(getMode)
  const rate = useSelector(getRate)
  const targets = useSelector(getTargets)
  const targetAmount = useSelector(getTargetAmount)
  const targetCurrency = useSelector(getTargetCurrency)

  const [submitButtonLabel, setSubmitButtonLabel] = useState('')

  useEffect(() => {
    const word = mode === ExchangeMode.SELL ? 'for' : 'with'
    
    setSubmitButtonLabel(`${mode} ${baseCurrency} ${word} ${targetCurrency}`)
  }, [mode, baseCurrency, targetCurrency])

  const handleBaseCurrensyChange = (event: React.ChangeEvent<HTMLInputElement>): void => { 
    dispatch(exchangeActions.changeBaseCurrency({
      selected: event.target.value as Currency,
      currencies
    }))
  }
  const handleTargetCurrensyChange  = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(exchangeActions.changeTargetCurrency({
      selected: event.target.value as Currency,
      currencies, 
    }))
  }
  const handleBaseAmountChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (!event.target.value || /^\d+(\.([0-9]([0-9])?)?)?$/.test(event.target.value)) {
      dispatch(exchangeActions.updateBaseAmount({
        value: event.target.value, 
        baseBalance: balances[baseCurrency],
        targetBalance: balances[targetCurrency],
      }))
    }
  }
  const handleTargetAmountChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (!event.target.value || /^\d+(\.([0-9]([0-9])?)?)?$/.test(event.target.value)) {
      dispatch(exchangeActions.updateTargetAmount({
        value: event.target.value, 
        baseBalance: balances[baseCurrency],
        targetBalance: balances[targetCurrency],
      }))
    }
  }
  
  return (
    <Wrapper data-testid={componentId} autoComplete="off">
      <Title data-testid="Title"> {mode} {baseCurrency}</Title>

      <Rate data-testid="Rate"> 1 {baseCurrency} = {rate} {targetCurrency}</Rate>

      <Amount>
        <TextField
          data-testid="baseAmount"
          id="baseAmount"
          label={baseCurrency}
          style={{flexGrow: 1}}
          value={baseAmount}
          onChange={handleBaseAmountChange}
        />

        <Selector
          id="standard-select-currency"
          select
          value={''}
          onChange={handleBaseCurrensyChange}
        >
          {targets.filter((item => item !== baseCurrency)).map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </Selector>
      </Amount>

      <Balance>Balance: {balances[baseCurrency]} {baseCurrency}</Balance>

      <Direction onClick={() => dispatch(exchangeActions.changeMode())}>
        {mode === ExchangeMode.SELL 
          ? <ArrowDownwardRounded />
          : <ArrowUpwardRounded />
        }
      </Direction>

      <Amount>
        <TextField
          data-testid="targetAmount"
          id="targetAmount"
          label={targetCurrency}
          value={targetAmount}
          style={{flexGrow: 1, marginTop: '15px'}}
          onChange={handleTargetAmountChange}
        />

        <Selector
          id="standard-select-currency"
          select
          value={''}
          onChange={handleTargetCurrensyChange}
        >
          {targets.filter((item => item !== targetCurrency)).map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </Selector>
      </Amount>

      <Balance>Balance: {balances[targetCurrency]} {targetCurrency}</Balance>

      <Error visible={error}>{errorText}</Error>

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
          disabled={error}
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
