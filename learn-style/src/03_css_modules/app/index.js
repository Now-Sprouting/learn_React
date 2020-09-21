import React, { PureComponent } from 'react';

// *CSS modules 的缺陷
// *1.引用的类名不能使用连接符 如:.home-title 在JavaScript中不识别
// *2.所有的className都必须使用{style.className}的形式编写
// *3.不方便动态修改样式,依然需要使用内联样式的方式

import appStyle from './style.module.css';
import Home from '../home';
import Profile from '../profile';

export default class App extends PureComponent {
  render() {
    return (
      <div id="app">
        App
        <h2 className={appStyle.title}>我是App的title</h2>
        <Home/>
        <Profile/>
      </div>
    )
  }
}
