import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from './reducers';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const logger = createLogger()

const middleware = [ thunk, logger ];

const store = createStore(
  reducer,
  applyMiddleware(...middleware),
)

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
