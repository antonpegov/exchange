import React from 'react'
import { push } from 'connected-react-router'
import { fireEvent, render } from '@testing-library/react'
import { useSelector, useDispatch } from 'react-redux'

import { Currency, ExchangeMode } from 'state/models'
import { mockedState } from 'utils/mocks/mocked-state'

import { Exchange, componentId, ExchangeProps } from './Exchange.component'

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

describe('Exchange component', () => {
  let component: React.ReactElement<ExchangeProps>

  beforeEach(() => {
    useSelectorMock.mockImplementation((selectorFn) => selectorFn(mockedState))
    useDispatchMock.mockReturnValue(dispatchSpy)
    pushMock.mockImplementation(pushSpy)
    component = <Exchange />;
  })

  it('shows `Sell <Currensy>` title in Sell mode', () => {
    useSelectorMock.mockImplementation((selectorFn) => selectorFn({
      ...mockedState,
      exchange: {
        ...mockedState.exchange,
        mode: ExchangeMode.SELL,
        baseCurrency: Currency.USD,
      }
    }))

    const { getByTestId } = render(component)

    expect(getByTestId('Title')).toHaveTextContent('Sell USD')
  })

  it('shows `Buy <Currensy>` title in Buy mode', () => {
    useSelectorMock.mockImplementation((selectorFn) => selectorFn({
      ...mockedState,
      exchange: {
        ...mockedState.exchange,
        mode: ExchangeMode.BUY,
        baseCurrency: Currency.PLN,
      }
    }))

    const { getByTestId } = render(component)

    expect(getByTestId('Title')).toHaveTextContent('Buy PLN')
  })

  it('shows active currency rate', () => {
    useSelectorMock.mockImplementation((selectorFn) => selectorFn({
      ...mockedState,
      exchange: {
        ...mockedState.exchange,
        mode: ExchangeMode.BUY,
        baseCurrency: Currency.PLN,
        rates: {
          [Currency.USD]: 4.333,
          [Currency.PLN]: 1,
        }
      }
    }))

    const { getByTestId } = render(component)

    expect(getByTestId('Rate')).toHaveTextContent('4.333')
  })

  describe('Exchange component --> Return button', () => {
    it('dispatch event when clicked on Submit button', () => {
      const { getByTestId } = render(component)

      fireEvent.click(getByTestId('ReturnButton'))
  
      expect(dispatchSpy).toHaveBeenCalledTimes(1)
    })
  })

  describe('Exchange component --> Submit button', () => {
    it('shows `Sell` text in Sell mode', () => {
      useSelectorMock.mockImplementation((selectorFn) => selectorFn({
        ...mockedState,
        exchange: {
          ...mockedState.exchange,
          mode: ExchangeMode.SELL,
          baseCurrency: Currency.USD,
        }
      }))

      const { getByTestId } = render(component)

      expect(getByTestId('SubmitButton')).toHaveTextContent('Sell')

    });

    it('shows `Buy` text in Buy mode', () => {
      useSelectorMock.mockImplementation((selectorFn) => selectorFn({
        ...mockedState,
        exchange: {
          ...mockedState.exchange,
          mode: ExchangeMode.BUY,
          baseCurrency: Currency.PLN,
        }
      }))

    const { getByTestId } = render(component)

    expect(getByTestId('SubmitButton')).toHaveTextContent('Buy')
    });

    it('NOT dispatch event when clicked on Return button if LowBalance flag is TRUE', () => {
      const { getByTestId } = render(component)

      fireEvent.click(getByTestId('SubmitButton'))
  
      expect(dispatchSpy).toHaveBeenCalledTimes(0)
    })

    it('dispatch event when clicked on Return button', () => {
      useSelectorMock.mockImplementation((selectorFn) => selectorFn({
        ...mockedState,
        exchange: {
          ...mockedState.exchange,
          error: false,
        }
      }))

      const { getByTestId } = render(component)

      fireEvent.click(getByTestId('SubmitButton'))
  
      expect(dispatchSpy).toHaveBeenCalledTimes(1)
    })
  })
});
