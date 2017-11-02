import React from 'react';
import { Controller } from './index.js';

describe('Controller Component', () => {
  it('renders correctly', () => {
    const props = {
      exercises: {
        cardio: [],
        weights: [],
      },
      getCardioExercisesAsync: jest.fn(),
      getWeightExercisesAsync: jest.fn(),
    };
    const component = global.shallow(
      <Controller {...props} />
    );

    expect(component).toMatchSnapshot();
  });
});
