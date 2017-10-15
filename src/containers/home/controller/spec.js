import React from 'react';
import renderer from 'react-test-renderer';
import { Controller } from './index.js';

describe('Controller Component', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <Controller />
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});