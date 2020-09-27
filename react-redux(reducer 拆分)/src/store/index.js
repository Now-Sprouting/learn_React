// *所有redux的文件都放在store中

// *1.无中间件写法
// import {createStore} from 'redux';
// import reducer from './reducer.js'

// const store = createStore(reducer);

// export default store;

// *2.redux-thunk中间件
// import {createStore, applyMiddleware} from 'redux';
// import thunkMiddleware from 'redux-thunk';
// import reducer from './reducer.js'

// const enhancer = applyMiddleware(thunkMiddleware);
// const store = createStore(reducer, enhancer);
// export default store;


// *3.使用redux-developtools
// import {createStore, applyMiddleware, compose} from 'redux';
// import thunkMiddleware from 'redux-thunk';
// import reducer from './reducer.js'

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true}) || compose;
// const enhancer = applyMiddleware(thunkMiddleware);
// const store = createStore(reducer, composeEnhancers(enhancer));
// export default store;

// *4.使用redux-saga中间件
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducer'
import saga from './saga'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;
const sagaMiddleware = createSagaMiddleware()
const storeEnhancer = applyMiddleware(sagaMiddleware);
const store = createStore(reducer, composeEnhancers(storeEnhancer))
sagaMiddleware.run(saga);
export default store
