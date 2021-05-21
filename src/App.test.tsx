import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import { store, history } from 'store'

import App from './App';

describe('App Component', () => {
  it('renders Wallet component', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
    );
    
    expect(getByTestId('Wallet')).toBeInTheDocument()
  })
})
