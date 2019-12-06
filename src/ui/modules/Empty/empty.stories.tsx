import React from 'react';
import { storiesOf } from '@storybook/react';
import Empty from '.';
import { themeDeco } from '../../styleguide/storiesThemeDecorator';

storiesOf('Modules/Empty', module)
  .addDecorator(themeDeco())
  .add('Simple', () => {
    return <Empty>Empty!</Empty>;
  });
