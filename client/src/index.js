import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './index.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers/index';
import Profilecreate from './components/profile-create';



let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
  <Provider store={store}>
   <MuiThemeProvider>
     <BrowserRouter>
       <div>
         <Switch>
           <Route path="/profilecreate" component = {Profilecreate} />
           <Route path="/" component = {App} />
         </Switch>
     </div>
     </BrowserRouter>
  {/* <App /> */}
  </MuiThemeProvider>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
