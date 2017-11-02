import React from 'react';
import Timer from './index.js';

describe('Timer Component', () => {
  it('renders correctly', () => {
    const component = global.shallow(
      <Timer />
    );

    expect(component).toMatchSnapshot();
  });
});
