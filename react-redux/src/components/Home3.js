//* 引入react-redux库版本
import React, { PureComponent } from "react";
import { subAction, decAction } from "../store/actionCreator";
import { connect } from 'react-redux'
class Home extends PureComponent {
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
    }
  }
}
export default connect(mapStateToProps, mapdispatchToProps)(Home)