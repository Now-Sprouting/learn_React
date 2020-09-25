// *react-redux库版本
import React from "react";
import {connect} from 'react-redux'
import {
  incAction,
  addAction
} from '../store/actionCreator'

function About(props) {
  return (
    <div>
      <hr />
      <h1>About</h1>
      <h2>当前计数: {props.counter}</h2>
      <button onClick={(e) => props.increment()}>+1</button>
      <button onClick={(e) => props.addNumber(5)}>+5</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
};
const mapDispatchToProps = dispatch => {
  return {
    increment: function () {
      dispatch(incAction())
    },
    addNumber: function (num) {
      dispatch(addAction(num))
    }
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(About)
