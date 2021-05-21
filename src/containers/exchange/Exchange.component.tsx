import React from 'react';

import { Title } from 'shared/components';
import { ExchangeMode } from 'state/models';

import { testIdBuilder } from 'utils';

export const componentId = 'Exchange';

const test = testIdBuilder(componentId);

export type ExchangeProps = { }

export const Exchange: React.FC<ExchangeProps> = () => {

  return (
    <div data-testid={test()}>
      <Title> { ExchangeMode.BUY } </Title>
    </div>
  )
};