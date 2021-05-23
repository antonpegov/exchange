import { push } from 'connected-react-router'
import { combineEpics, Epic } from 'redux-observable'
import { timer, Observable } from 'rxjs'
import { ActionType, isActionOf } from 'typesafe-actions'
import { filter, mapTo, map, switchMap, withLatestFrom } from 'rxjs/operators'

import { exchangeActions, walletActions } from 'state/actions'
import { getBalances, getBaseCurrency, getCurrencies } from 'state/selectors'
import { adjustRates } from 'state/helpers'
import { RootState } from 'store'
import { Api } from 'api'

type Actions = ActionType<typeof exchangeActions & typeof walletActions>

const initExchangePage$: Epic = (
  action$: Observable<Actions>, 
  state$: Observable<RootState>,
) =>
  action$.pipe(
    filter(isActionOf(walletActions.runExchange)),
    withLatestFrom(state$.pipe(map(state => getCurrencies(state)))),
    map(([{ payload }, currencies]) => exchangeActions.init({ base: payload, currencies })),
  )

const getRates$: Epic = (
  action$: Observable<Actions>, 
  state$: Observable<RootState>,
) =>
  action$.pipe(
    filter(isActionOf(exchangeActions.init)),
    switchMap(() => 
      timer(0, 5000).pipe(
        withLatestFrom(
          state$.pipe(map(state => getBaseCurrency(state))),
          state$.pipe(map(state => getCurrencies(state))),
          state$.pipe(map(state => getBalances(state))),
          state$.pipe(map(state => state.exchange.active)),

        ),
        filter(([, , , , isActive]) => isActive),
        switchMap(([i, baseCurrency, currencies, balances]) => Api.getRates(baseCurrency).pipe(
          map((data: any) => exchangeActions.rates({
            ...data,
            rates: adjustRates(baseCurrency, currencies, data.rates, i),
            balances,
          }))
        ))
      ),
    )
  )

const closeExchangePage$: Epic = (action$: Observable<Actions>) =>
  action$.pipe(
    filter(isActionOf(exchangeActions.return)),
    mapTo(push('/balances')),
  )

export const exchangeEpics: Epic = combineEpics(
  initExchangePage$,
  closeExchangePage$,
  getRates$,
)
