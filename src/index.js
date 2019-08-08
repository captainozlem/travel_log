import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import App from './components/app';

import Root from './components/root'

ReactDOM.render(
  <Provider store={store}>
    {/* <App/> */}
     <BrowserRouter>
      <Root />
     </BrowserRouter>
  </Provider>,
  document.getElementById('map')
);

// ReactDOM.render(
//   <Provider store={store}>
//       <App />
//   </Provider>,
//   document.getElementById('map')
// );
