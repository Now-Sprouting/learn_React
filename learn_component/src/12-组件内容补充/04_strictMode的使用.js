import React, { PureComponent, StrictMode } from 'react';

// *严格模式检查的是什么?
// *1.识别不安全的生命周期
// *2.使用过时的ref API
// *3.使用废弃的 findDOMNode方法
// *4.检查意外的副作用
// *5.检查过时的context API
class Home extends PureComponent {
  constructor(props) {
    super(props);

    console.log("home constrcutor");
  }

  // UNSAFE_componentWillMount() {
  //   console.log("home componentWillMount");
  // }

  render() {
    return (
      <div ref="title">
        Home
      </div>
    )
  }
}

class Profile extends PureComponent {
  constructor(props) {
    super(props);

    console.log("profile constructor");
  }

  // UNSAFE_componentWillMount() {
  //   console.log("profile componentWillMount");
  // }

  render() {
    return (
      <div ref="title">
        Profile
      </div>
    )
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <StrictMode>
          <Home/>
        </StrictMode>
        <Profile/>
      </div>
    )
  }
}
