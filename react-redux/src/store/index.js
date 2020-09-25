// *所有redux的文件都放在store中

// *1.无中间件写法
// import {createStore} from 'redux';
// import reducer from './reducer.js'

// const store = createStore(reducer);

// export default store;

// *2.redux-thunk中间件
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducer.js'

const enhancer = applyMiddleware(thunkMiddleware);
const store = createStore(reducer, enhancer);
export default store;