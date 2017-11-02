import React from 'react';
import { Home } from './index.js';

describe('Home Component', () => {
  it('renders correctly', () => {
    const list = {
      items: [{
        text: 'hello',
      }],
    };
    const removeExerciseFromList = () => ({});
    const component = global.shallow(
      <Home
        list={list}
        removeExerciseFromList={removeExerciseFromList}
      />
    );

    expect(component).toMatchSnapshot();
  });
});
