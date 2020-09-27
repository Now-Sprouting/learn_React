// *saga中间件的使用
import {put, all, takeLatest } from 'redux-saga/effects';
import axios from 'axios'
import {
    FETCH_HOME_MULTIDATA
} from './home/constants';
import {
    changeBannersAction,
    changeRecommendAction
} from './home/actionCreators';
// *只要 saga中间件拦截到 action中的 type 就会执行下面的生成器函数做出相应的反应
function* fetchHomeMultidata(action) {
    // *因为 saga内部做了 一部分 next() 所以可以直接拿到 res
    const res = yield axios.get("http://123.207.32.32:8000/home/multidata");
    const banners = res.data.data.banner.list;
    const recommends = res.data.data.recommend.list;
    // *执行下一个action
    // yield put(changeBannersAction(banners));
    // yield put(changeRecommendAction(recommends));
    // *两次 put 的另一种写法
    yield all([
        yield put(changeBannersAction(banners)),
        yield put(changeRecommendAction(recommends))
    ])
}

function* mySaga() {
    // *takeEvery中传递两个参数,takeEvery(需要执行的action的type, 生成器函数)
    // *takeEvery 和 takeLatest 的区别 takeEvery 每次的action都会执行, takeLatest只会执行多个触发action的最后一次

    // *如果想监听多个action
    yield all([
        takeLatest(FETCH_HOME_MULTIDATA, fetchHomeMultidata),
        // takeLatest(ADD_NUMBER, fetchHomeMultidata),
    ]);
}
// *要导出一个generator函数
export default mySaga