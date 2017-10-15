import React from 'react';
import renderer from 'react-test-renderer';
import NotFound from './index.js';

describe('NotFound Component', () => {
	it('renders correctly', () => {
	  const component = renderer.create(
	    <NotFound />
	  ).toJSON();
	  expect(component).toMatchSnapshot();
	});
});