import React from 'react';
import renderer from 'react-test-renderer';
import { ExerciseSelect } from './index.js';

describe('ExerciseSelect Component', () => {
	it('renders correctly', () => {
	  const component = renderer.create(
	    <ExerciseSelect />
	  ).toJSON();
	  expect(component).toMatchSnapshot();
	});
});