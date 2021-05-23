import { push } from 'connected-react-router'
import { Observable } from 'rxjs'
import { combineEpics, Epic } from 'redux-observable'
import { ActionType, isActionOf } from 'typesafe-actions'
import { filter, map, mapTo, withLatestFrom } from 'rxjs/operators'

import { exchangeActions, walletActions } from 'state/actions'
import { ExchangeMode } from 'state/models'
import { RootState } from 'store'
import { toFixed } from 'state/helpers'

type Actions = ActionType<typeof walletActions & typeof exchangeActions>

const openExchangeView$: Epic = (
  actions$: Observable<Actions>,
) =>
  actions$.pipe(
    filter(isActionOf(walletActions.runExchange)),
    mapTo(push('/currency')),
  )

const makeExchange$: Epic = (
  actions$: Observable<Actions>,
  state$: Observable<RootState>,
) => 
  actions$.pipe(
    filter(isActionOf(exchangeActions.makeExchange)),
    withLatestFrom(
      state$.pipe(map(state => state.wallet)), 
      state$.pipe(map(state => state.exchange))
    ),
    map(([, { balances },  exchange]) => {
      let newBaseBalance, newTargetBalance  
      
      if (exchange.mode === ExchangeMode.BUY) {
        newBaseBalance = toFixed(balances[exchange.baseCurrency] + +exchange.baseAmount)
        newTargetBalance = toFixed(balances[exchange.targetCurrency] - +exchange.targetAmount)
      } else {
        newBaseBalance = toFixed(balances[exchange.baseCurrency] - +exchange.baseAmount)
        newTargetBalance = toFixed(balances[exchange.targetCurrency] + +exchange.targetAmount)
      }

      return walletActions.updateBalances({
        ...balances,
        [exchange.baseCurrency]: newBaseBalance,
        [exchange.targetCurrency]: newTargetBalance,
      })
    })
  )

export const walletEpics: Epic = combineEpics(
  openExchangeView$,
  makeExchange$,
)