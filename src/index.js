import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Route } from 'react-router';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers/index.js';
import Home from './containers/home/index.js';
import Timer from './containers/timer/index.js';
import NotFound from './containers/notfound/index.js';
import 'react-select/dist/react-select.css';

const history = createHistory();

// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer,
  }),
  applyMiddleware(routerMiddleware(history)),
  applyMiddleware(thunk),
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/timer" component={Timer} />
        <Route path="*" component={NotFound} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
