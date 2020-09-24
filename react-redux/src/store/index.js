// *所有redux的文件都放在store中
import {createStore} from 'redux';
import reducer from './reducer.js'


const store = createStore(reducer);

export default store;