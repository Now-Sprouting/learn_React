import axios from 'axios'
import {
    CHANGE_BANNERS,
    CHANGE_RECOMMEND,
    FETCH_HOME_MULTIDATA
} from './constants.js'


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