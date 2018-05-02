import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Sheets from './components/Sheets'
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { Store } from './store';
import {BrowserRouter, Route} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Auth from './authentication/authentication';

function requireLoggedIn(nextState, replace) {
  const isLoggedIn = Auth.isLoggedIn();
  if (!isLoggedIn) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    });
  }
  window.console.log('isLoggedIn');
  return isLoggedIn;
}

ReactDOM.render(
  <Provider store={Store}>
    <MuiThemeProvider>
      <BrowserRouter>
        <div>
          <Route path="/app" component={App} onEnter={requireLoggedIn}/>
          <Route path="/login" component={Sheets} onEnter={requireLoggedIn}/>
        </div>
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>
, document.getElementById('root'));
registerServiceWorker();
