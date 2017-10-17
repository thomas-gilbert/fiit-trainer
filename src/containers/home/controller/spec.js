import React from 'react';
import { Controller } from './index.js';

describe('Controller Component', () => {
  it('renders correctly', () => {
    const component = shallowWithStore(
      <Controller />
      , {
        state: {},
      }
    );

    expect(component).toMatchSnapshot();
  });
});
