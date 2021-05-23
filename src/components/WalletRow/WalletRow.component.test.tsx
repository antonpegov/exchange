import React from 'react'
import { fireEvent, render } from '@testing-library/react'

import { WalletRow, componentId, WalletRowProps } from './WalletRow.component'
import { Currency } from 'state/models'

describe('WalletRow component', () => {
  let outputSpy: jest.Mock
  let component: React.ReactElement<WalletRowProps>

  beforeEach(() => {
    outputSpy = jest.fn();
    component = <WalletRow balance={100} currency={Currency.PLN} onExchangeClick={outputSpy}/>;
  })

  it('shows balance', () => {
    const { getByTestId } = render(component)

    expect(getByTestId('Balance')).toHaveTextContent('100')
  })

  it('shows currency', () => {
    const { getByTestId } = render(component)

    expect(getByTestId('Currency')).toHaveTextContent(Currency.PLN)
  })

  it('calls onExchangeClick prop callback on ExchangeButton click', () => {
    const { getByTestId } = render(component)
    fireEvent.click(getByTestId('ExchangeButton'))

    expect(outputSpy).toHaveBeenCalledTimes(1)
  })
});
