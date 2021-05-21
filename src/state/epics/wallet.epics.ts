import { push } from 'connected-react-router'
import { Observable, of } from 'rxjs'
import { combineEpics, Epic } from 'redux-observable'
import { ActionType, isActionOf } from 'typesafe-actions'
import { filter, ignoreElements, map, switchMap, switchMapTo, tap } from 'rxjs/operators'

import { exchangeActions } from 'state/actions/exchange.actions'
import { walletActions } from 'state/actions/wallet.actions'
import { Api } from 'api'
// import toast from 'utils/toast.helper'


type Actions = ActionType<typeof walletActions>

const onReset$: Epic = (
  action$: Observable<Actions>,
) =>
  action$.pipe(
    filter(isActionOf(walletActions.resetBalances)),
    // tap(() => toast.success('Balances reseted to initial state')),
    ignoreElements(),
  )

  const getRates$: Epic = (
    action$: Observable<Actions>,
  ) =>
    action$.pipe(
      filter(isActionOf(walletActions.runExchange)),
      switchMap(({ payload }) => Api.getRates(payload).pipe(
        map((data: any) => exchangeActions.rates(data))
      )),
    )

  const openExchange$: Epic = (
    action$: Observable<Actions>,
  ) =>
    action$.pipe(
      filter(isActionOf(walletActions.runExchange)),
      switchMapTo(of(push('/currency'))),
    )

export const walletEpics: Epic = combineEpics(
  onReset$,
  getRates$,
  openExchange$,
)