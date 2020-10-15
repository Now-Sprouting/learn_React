//* 引入react-redux库版本(异步请求) (thunk中间件)
import React, { PureComponent } from "react";
import { connect } from 'react-redux'
import {
  subAction,
  decAction,
  getHomeMultidataAction
} from "../store/actionCreator";

class Home extends PureComponent {
  componentDidMount() {
    this.props.getHomeMultidata();
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
    // *普通的dispatch中传入的是对象
    // *redux-thunk要求我们 dispatch一个函数,他在内部执行这个函数并作出一些处理,在action中就会执行这个函数
    getHomeMultidata: function () {
      dispatch(getHomeMultidataAction);
    }
  }
}
export default connect(mapStateToProps, mapdispatchToProps)(Home)