import styled from 'styled-components';
import { Route } from 'react-router-dom'

import { Exchange, Wallet } from 'containers';

import { Container, Panel } from 'shared/components';

function App({className}: {className?: string}) {
  return (
    <div className={className}>
      <Container>
        <Panel>
          <Route exact path="/" component={Wallet} />

          <Route exact path="/ex" component={Exchange} />
        </Panel>
      </Container>
    </div>
  );
}

export default styled(App)`
  background-color: aliceblue;
  height: 100vh;
`;
