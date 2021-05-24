import styled from 'styled-components';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Router, Redirect, Switch } from 'react-router-dom'

import { Exchange, Wallet } from 'containers';
import { Container, Panel } from 'shared/components';
import { store, history } from 'store'

const Background = styled.div`
  background-color: aliceblue;
  height: 100vh;
`

export const App = () => {
  return (
    <Background>
      <Provider store={store}>
        <Container>
          <Panel>
            <ConnectedRouter history={history}>
              <Router history={history}>
                <Switch>
                  <Route exact={true} path="/balances" component={Wallet} />
                  <Route exact={true} path="/currency" component={Exchange} />
                  <Route>
                    <Redirect to="/balances" />
                  </Route>
                </Switch>
              </Router>
            </ConnectedRouter>
          </Panel>
        </Container>
      </Provider>
    </Background>
  );
}
