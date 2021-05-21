import React from 'react'
import ReactDOM from 'react-dom'
import { SnackbarProvider } from 'notistack'

import App from 'App'
import 'index.css'

ReactDOM.render(
  <React.StrictMode>
    <SnackbarProvider maxSnack={5} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
      <App />
    </SnackbarProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
