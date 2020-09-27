//* 引入react-redux库版本(异步请求) (thunk中间件)
import React, { PureComponent } from "react";
import { connect } from 'react-redux'
import {
  subAction,
  decAction
} from "../store/counter/actionCreators";
import {
  fetchHomeMultidataAction
} from "../store/home/actionCreators";
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
    counter: state.counterInfo.counter
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
    // *dispatch一个函数,在action中就会执行这个函数
    getHomeMultidata: function () {
      dispatch(fetchHomeMultidataAction);
    }
  }
}
export default connect(mapStateToProps, mapdispatchToProps)(Home)