import { combineEpics, createEpicMiddleware } from "redux-observable";
import { combineReducers, compose, createStore, applyMiddleware } from 'redux';

import { exchangeReducer } from 'state/reducers/exchange.reducer'
import { walletReducer } from 'state/reducers/wallet.reducer'
import { exchangeEpics } from 'state/epics/exchange.epics';
import { walletEpics } from 'state/epics/wallet.epics';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: <R>(a: R) => R
  }
}

const epicMiddleware = createEpicMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const rootEpic = combineEpics(
  exchangeEpics,
  walletEpics,
)

export const rootReducer = combineReducers({
  walletReducer,
  exchangeReducer,
});

export const store = createStore(
  rootReducer,
  composeEnhancers(
   applyMiddleware(epicMiddleware)
  ),
);

epicMiddleware.run(rootEpic)