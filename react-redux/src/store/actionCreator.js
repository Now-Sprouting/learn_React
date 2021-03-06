import axios from 'axios'
import {
    ADD_NUMBER,
    SUB_NUMBER,
    INCREMENT,
    DECREMENT,
    CHANGE_BANNERS,
    CHANGE_RECOMMEND,
    FETCH_HOME_MULTIDATA
} from './constants.js'

//* 基本写法
// export function addAction(num) {
//     return {
//         type: ADD_NUMBER,
//         num
//     }
// }

// *升级版本
// export const addAction = (num) => {
//     return {
//         type : ADD_NUMBER,
//         num
//     }
// }

// *至尊版本
export const addAction = num => ({
    type: ADD_NUMBER,
    num
})

export const subAction = num => ({
    type: SUB_NUMBER,
    num
})
export const incAction = () => ({
    type: INCREMENT
})

export const decAction = () => ({
    type: DECREMENT
})

// *Home4  About4 蘑菇街异步数据
export const changeBannersAction = banner => ({
    type: CHANGE_BANNERS,
    banner
})
export const changeRecommendAction = recommend => ({
    type: CHANGE_RECOMMEND,
    recommend
})

//* Home5   redux-thunk中定义的action函数
export const getHomeMultidataAction = (dispatch, getState) => {
    axios({
        url: "http://123.207.32.32:8000/home/multidata",
    }).then(res => {
        const data = res.data.data;
        dispatch(changeBannersAction(data.banner.list));
        dispatch(changeRecommendAction(data.recommend.list));
    })
}

// * Home6   redux-saga中间件
export const fetchHomeMultidataAction = {
    type: FETCH_HOME_MULTIDATA
}