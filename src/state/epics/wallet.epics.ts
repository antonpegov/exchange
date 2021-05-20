import { Observable } from 'rxjs'
import { filter, ignoreElements, tap } from 'rxjs/operators'
import { combineEpics, Epic } from 'redux-observable'
import { ActionType, isActionOf } from 'typesafe-actions'

import { walletActions } from 'state/actions/wallet.actions'
import toast from 'state/helpers/toast.helper'


type Actions = ActionType<typeof walletActions>

const onReset$: Epic = (
  action$: Observable<Actions>,
) =>
  action$.pipe(
    filter(isActionOf(walletActions.resetAccounts)),
    tap(() => toast.success('Balances reseted to initial state')),
    ignoreElements(),
  )

export const walletEpics: Epic = combineEpics(
  onReset$,
)