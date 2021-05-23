import React from 'react'
import { push } from 'connected-react-router'
import { fireEvent, render } from '@testing-library/react'
import { useSelector, useDispatch } from 'react-redux'

import { mockedState } from 'utils/mocks/mocked-state'

import { Wallet, componentId, WalletProps, componentTitle } from './Wallet.component'

//#region Mocks
const useSelectorMock = useSelector as jest.Mock
const useDispatchMock = useDispatch as jest.Mock
const pushMock = push as jest.Mock
const dispatchSpy = jest.fn()
const pushSpy = jest.fn()

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}))

jest.mock('connected-react-router', () => ({
  push: jest.fn(),
}))
//#endregion

describe('Wallet component', () => {
  let component: React.ReactElement<WalletProps>

  beforeEach(() => {
    useSelectorMock.mockImplementation((selectorFn) => selectorFn(mockedState))
    useDispatchMock.mockReturnValue(dispatchSpy)
    pushMock.mockImplementation(pushSpy)
    component = <Wallet />;
  })

  it('shows title', () => {
    const { getByTestId } = render(component)

    expect(getByTestId('Title')).toHaveTextContent(componentTitle)
  })

  it('shows wallet rows', () => {
    const { getByTestId } = render(component)

    expect(getByTestId('Balances').childElementCount).toEqual(4)
  })

  it('dispatch event when clicked on reset button', () => {
    const { getByTestId } = render(component)
    fireEvent.click(getByTestId('ResetButton'))

    expect(dispatchSpy).toHaveBeenCalledTimes(1)
  })

  it('dispatch event when clicked on Start Exchange button', () => {
    const { getAllByTestId } = render(component)
    fireEvent.click(getAllByTestId('ExchangeButton')[0])

    expect(dispatchSpy).toHaveBeenCalledTimes(1)
  })
});
