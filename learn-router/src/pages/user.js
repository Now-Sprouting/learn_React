import React, { PureComponent } from 'react'
import { Redirect } from 'react-router-dom';

export default class User extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: false
    }
  }

  render() {
    return (
      <h2>User</h2>
    )

    
    // return this.state.isLogin ? (
    //   <div>
    //     <h2>User</h2>
    //     <h2>用户名: coderwhy</h2>
    //   </div>
    // ): <div><Redirect to="/login"/></div>
  }
}
