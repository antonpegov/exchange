import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { SnackbarProvider } from 'notistack'
import { ConnectedRouter } from 'connected-react-router'

import { store, history } from 'store'
import App from 'App'
import 'index.css'

ReactDOM.render(
  <React.StrictMode>
    <SnackbarProvider maxSnack={5} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
    </SnackbarProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
