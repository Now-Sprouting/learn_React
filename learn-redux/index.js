// *node import 的ES6导入模块方法从 13.2.0 以后才支持,如果之前版本需要使用,需加上type 属性以及一些参数
//* 重构代码
import store from './store/index.js'
import {
    addAction,
    subAction,
    incAction,
    decAction
} from './store/actionCreator.js'

store.subscribe(() => {
    console.log(store.getState());
})
store.dispatch(addAction(10))
store.dispatch(subAction(20))
store.dispatch(incAction())
store.dispatch(decAction())