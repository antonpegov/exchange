import ReactDOM from 'react-dom'
import { ThemeProvider } from '@material-ui/core'
import { SnackbarProvider } from 'notistack'

import { App } from 'App'
import { theme } from 'theme'
import 'index.css'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <SnackbarProvider maxSnack={5} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
      <App />
    </SnackbarProvider>
  </ThemeProvider>,
  document.getElementById('root')
);
