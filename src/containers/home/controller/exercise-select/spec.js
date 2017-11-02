import React from 'react';
import { ExerciseSelect } from './index.js';

describe('ExerciseSelect Component', () => {
  it('renders correctly', () => {
    const props = {
      defaultValue: 'Please select',
      addExerciseToList: jest.fn(),
    };
    const component = global.shallow(
      <ExerciseSelect {...props} />
    );

    expect(component).toMatchSnapshot();
  });
});
