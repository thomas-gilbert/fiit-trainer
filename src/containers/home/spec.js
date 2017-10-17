import React from 'react';
import renderer from 'react-test-renderer';
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
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
