import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Adapter from 'enzyme-adapter-react-16';

const { mount, shallow, configure } = require('enzyme');

configure({ adapter: new Adapter() });

global.mount = mount;
global.shallow = shallow;

const createMockStore = configureMockStore([thunk]);

global.shallowWithStore = function shallowWithStore(component, opts = {}) {
  if (!opts.state) {
    throw new Error('opts.state is required');
  }

  return global.shallow(
    <Provider store={createMockStore(opts.state)}>
      {component}
    </Provider>, opts);
};

global.mountWithStore = function mountWithStore(component, opts = {}) {
  if (!opts.state) {
    throw new Error('opts.state is required');
  }

  return global.mount(
    <Provider store={createMockStore(opts.state)}>
      {component}
    </Provider>, opts);
};
