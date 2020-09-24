// *所有redux的文件都放在store中
import redux from 'redux';
import reducer from './reducer.js'


const store = redux.createStore(reducer);

export default store;