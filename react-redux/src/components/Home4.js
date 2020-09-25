//* 引入react-redux库版本(异步请求)
import React, { PureComponent } from "react";
import {
  subAction,
  decAction,
  changeBannersAction,
  changeRecommendAction
} from "../store/actionCreator";
import { connect } from 'react-redux'
import axios from 'axios'
class Home extends PureComponent {
  componentDidMount() {
    axios({
      url: 'http://123.207.32.32:8000/home/multidata'
    }).then(res => {
      const {data} = res.data;
      const banner = data.banner.list;
      const recommend = data.recommend.list;
      this.props.changeBanner(banner);
      this.props.changeRecommend(recommend);
    })
  }
  render() {
    return (
      <div>
        <hr />
        <h1>Home</h1>
        <h2>当前计数: {this.props.counter}</h2>
        <button onClick={(e) => this.props.decrement()}>-1</button>
        <button onClick={(e) => this.props.subNumber(5)}>-5</button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}
const mapdispatchToProps = dispatch => {
  return {
    decrement: function () {
      dispatch(decAction())
    },
    subNumber: function (num) {
      dispatch(subAction(num))
    },
    changeBanner: function(banner) {
      dispatch(changeBannersAction(banner))
    },
    changeRecommend: function(recommend) {
      dispatch(changeRecommendAction(recommend))
    }
  }
}
export default connect(mapStateToProps, mapdispatchToProps)(Home)