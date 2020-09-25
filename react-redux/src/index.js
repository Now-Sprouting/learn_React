import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// *2.自己封装 context And connect
// import { StoreContext } from './utils/context'

//* 3.引入 redux库版本
import { Provider } from 'react-redux'
import store from './store'
ReactDOM.render(
  //* 1.无connect版本
  // <App/>,

  //* 2. 自己封装 connect版本
  // <StoreContext.Provider value={store}>
  //   <App />
  // </StoreContext.Provider>,
  <Provider store={store}>
    <App />
  </Provider>,
  //* 3.引入 redux库版本
  document.getElementById('root')
);
