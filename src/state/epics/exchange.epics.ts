import { push } from 'connected-react-router'
import { Observable } from 'rxjs'
import { combineEpics, Epic } from 'redux-observable'
import { ActionType, isActionOf } from 'typesafe-actions'
import { filter, mapTo, map, switchMap, withLatestFrom } from 'rxjs/operators'

import { exchangeActions, walletActions } from 'state/actions'
import { getCurrencies } from 'state/selectors'
import { RootState } from 'store'
import { Api } from 'api'

type Actions = ActionType<typeof exchangeActions & typeof walletActions>

const initExchangePage$: Epic = (
  action$: Observable<Actions>, 
  state$: Observable<RootState>
) =>
  action$.pipe(
    filter(isActionOf(walletActions.runExchange)),
    withLatestFrom(state$.pipe(map(state => getCurrencies(state)))),
    map(([{ payload }, currencies]) => exchangeActions.init({ base: payload, currencies })),
  )

const getRates$: Epic = (action$: Observable<Actions>) =>
  action$.pipe(
    filter(isActionOf(walletActions.runExchange)),
    switchMap(({ payload }) => Api.getRates(payload).pipe(
      map((data: any) => exchangeActions.rates(data))
    )),
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
