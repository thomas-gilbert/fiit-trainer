import React from 'react';
import { Home } from './index.js';

describe('Home Component', () => {
  it('renders correctly', () => {
    const list = [{
      text: 'hello',
    }];
    const removeExerciseFromList = () => ({});
    const component = shallowWithStore(
      <Home
        list={list}
        removeExerciseFromList={removeExerciseFromList}
      />, {
        state: {},
      }
    );
    expect(component).toMatchSnapshot();
  });
});
