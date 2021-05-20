import { Observable } from 'rxjs'
import { combineEpics, Epic } from 'redux-observable'
import { ActionType, isActionOf } from 'typesafe-actions'
import { filter, tap, ignoreElements } from 'rxjs/operators'

import { exchangeActions } from 'state/actions/exchange.actions'
import toast from 'state/helpers/toast.helper'

type Actions = ActionType<typeof exchangeActions>

const initExchangePage$: Epic = (action$: Observable<Actions>) =>
  action$.pipe(
    filter(isActionOf([
      exchangeActions.init,
    ])),
    tap(() => toast.info('starting rates updating')),
    ignoreElements(),
  )

const closeExchangePage$: Epic = (action$: Observable<Actions>) =>
  action$.pipe(
    filter(isActionOf([
      exchangeActions.init,
    ])),
    tap(() => toast.info('stoping rates updating')),
    ignoreElements(),
  )

export const exchangeEpics: Epic = combineEpics(
  initExchangePage$,
  closeExchangePage$,
)