// *react-redux库版本(异步请求)
import React from "react";
import { connect } from 'react-redux'
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
      <hr />
      {/* <div>1{props.banner.acm}</div> */}
      <ul>
        {
          props.banner.map((item) => {
            return <li key={item.acm}>{item.title}</li>
          })
        }
      </ul>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    counter: state.counter,
    banner: state.banner,
    recommed: state.recommed
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
