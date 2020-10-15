//*代码缺点总结
// *1. 所有的代码都放在了一起,阅读性较差
// *2. type 都是写死的,代码不够灵活
// *3. action中的数据也是写死的,代码也不够灵活

//* 1.导入redux,注:不能以ES6方式导入
const redux = require('redux')


const initialState = {
    counter: 0
}

//* redux三大特性之三: reducer
// *第一次调用reducer时,第一个参数为上次的state为 undefined 所以给state设置初始值
function reducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT':
            // *不能直接对state进行修改,那样的话就会的对state产生副作用,reducer就不是一个纯函数了
            return { ...state, counter: state.counter + 1 }
        case 'DECREMENT':
            return { ...state, counter: state.counter - 1 }
        case 'ADD_NUMBER':
            return { ...state, counter: state.counter + action.num }
        case 'SUB_NUMBER':
            return { ...state, counter: state.counter - action.num }
        default:
            return state;
    }
}

//*redux三大特性之一: store
const store = redux.createStore(reducer)

// *3.订阅store的修改
store.subscribe(() => {
    console.log(store.getState().counter);
})

//* redux三大特性之二: action
const action1 = { type: 'INCREMENT' }
const action2 = { type: 'DECREMENT' }

const action3 = { type: 'ADD_NUMBER', num: 5 }
const action4 = { type: 'SUB_NUMBER', num: 12 }


//*2. 派发action(调用dispatch的时候,会给reducer传入两个参数,第一个参数是上次的state,第二个参数是dispatch的action)
store.dispatch(action1)
store.dispatch(action2)
store.dispatch(action3)
store.dispatch(action4)
