import React from 'react';
import { ExerciseSelect } from './index.js';

describe('ExerciseSelect Component', () => {
  it('renders correctly', () => {
    const component = shallowWithStore(
      <ExerciseSelect />
      , {
        state: {},
      }
    );

    expect(component).toMatchSnapshot();
  });
});
