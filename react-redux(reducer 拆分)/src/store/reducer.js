import {combineReducers} from 'redux'
import {reducer as counterReducer} from './counter'
import {reducer as homeReducer} from './home'

// *通过引入插件的形式合并reducer
// function reducer(state= {}, action) {
//     return {
//         counterInfo: counterReducer(state.counterInfo, action),
//         homeInfo: homeReducer(state.homeInfo, action)
//     }
// }
const reducer = combineReducers({
    counterInfo: counterReducer,
    homeInfo: homeReducer
})
export default reducer;