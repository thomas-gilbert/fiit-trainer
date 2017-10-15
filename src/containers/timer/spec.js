import React from 'react';
import renderer from 'react-test-renderer';
import Timer from './index.js';

describe('Timer Component', () => {
	it('renders correctly', () => {
	  const component = renderer.create(
	    <Timer />
	  ).toJSON();
	  expect(component).toMatchSnapshot();
	});
});