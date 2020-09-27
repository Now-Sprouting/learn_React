import {
    CHANGE_BANNERS,
    CHANGE_RECOMMEND
} from './constants.js'
// *homeReducer
const initialHomeState = {
    banner: [],
    recommend: []
}
function homeReducer(state = initialHomeState, action) {
    switch (action.type) {
        case CHANGE_BANNERS:
            return { ...state, banner: action.banner }
        case CHANGE_RECOMMEND:
            return { ...state, recommend: action.recommend }
        default:
            return state
    }
}

export default homeReducer;