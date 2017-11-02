import React from 'react';
import NotFound from './index.js';

describe('NotFound Component', () => {
  it('renders correctly', () => {
    const component = global.shallow(
      <NotFound />
    );

    expect(component).toMatchSnapshot();
  });
});
