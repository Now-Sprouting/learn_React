import React, { PureComponent } from 'react';
import { renderRoutes } from 'react-router-config';

import routes from './router';

import {
  BrowserRouter,
  Link,
  Route,
  NavLink,
  Switch,
  withRouter
} from 'react-router-dom';

import './App.css';

import Home from './pages/home';
import About from './pages/about';
import AboutManualJump from './pages/about-ManualJump';
import Profile from './pages/profile';
import User from './pages/user';
import UserRedirct from './pages/user-Redirct';
import NoMatch from './pages/noMatch';
import Login from './pages/login';
import Product from './pages/product';
import Detail from './pages/detail';
import Detail2 from './pages/detail2';
import Detail3 from './pages/detail3';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      // links: [
      //   { to: "/", title: "首页" },
      //   { to: "/about", title: "首页" },
      //   { to: "/", title: "首页" },
      // ]
    }
  }

  render() {
    // *6.动态路由参数
    const id = "123";
    // *7.3路由传参
    const info = { name: "why", age: 18, height: 1.88 };

    return (
      <div>
        {/* 0.基本使用 */}
        {/* <Link to="/">首页</Link>
        <Link to="/profile">我的</Link>

        <Route path='/' exact component={Home}></Route>
        <Route path='/profile' component={Profile}></Route> */}


        {/* 1.NavLink的使用 */}
        {/* 使用Navlink Router会为我们选中的样式默认添加 activeStyle 和 activeClassName属性 */}
        {/* <NavLink exact to="/" activeStyle={{ color: "red", fontSize: "30px" }}>首页</NavLink>
        <NavLink to="/about" activeStyle={{ color: "red", fontSize: "30px" }}>关于</NavLink>
        <NavLink to="/profile" activeStyle={{ color: "red", fontSize: "30px" }}>我的</NavLink> */}

        {/* <NavLink exact to="/" activeClassName="link-active">首页</NavLink>
        <NavLink to="/about" activeClassName="link-active">关于</NavLink>
        <NavLink to="/profile" activeClassName="link-active">我的</NavLink> */}

        {/* <Route path='/' exact component={Home}></Route>
        <Route path='/profile' component={Profile}></Route> */}



        {/* 2.Switch的使用 */}
        {/* <NavLink to="/" exact activeClassName="link-active">首页</NavLink>
        <NavLink to="/profile" activeClassName="link-active">我的</NavLink> */}
        {/* 2.1 不使用 Switch */}
        {/* <Route path='/' exact component={Home}></Route>
        <Route path='/profile' component={Profile}></Route>
        <Route path='/:id' component={User}></Route>
        <Route component={NoMatch}></Route> */}
        {/* 2.2 使用 Switch(不管动态路由还是没有匹配到的情况下都只匹配一个) */}
        {/* <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/profile' component={Profile}></Route>
          <Route path='/:id' component={User}></Route>
          <Route component={NoMatch}></Route>
        </Switch> */}


        {/* 3.Redirct的使用 */}
        {/* Redirct只要遇到 <Redirct> 标签就会自动跳转*/}
        {/* <NavLink to="/" exact activeClassName="link-active">首页</NavLink>
        <NavLink to="/profile" activeClassName="link-active">我的</NavLink>
        <NavLink to="/user" activeClassName="link-active">用户</NavLink>
        <NavLink to="/login" activeClassName="link-active">登录</NavLink>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/profile' component={Profile}></Route>
          <Route path='/user' component={UserRedirct}></Route>
          <Route path='/login' component={Login}></Route>
        </Switch> */}

        {/* 4.路由的嵌套 */}
        {/* <NavLink to="/" exact activeClassName="link-active">首页</NavLink>
        <NavLink to="/about" activeClassName="link-active">关于</NavLink>
        <NavLink to="/profile" activeClassName="link-active">我的</NavLink>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/about' component={About}></Route>
          <Route path='/profile' component={Profile}></Route>
        </Switch> */}


        {/* 5.手动路由跳转 */}
        {/* <NavLink to="/" exact activeClassName="link-active">首页</NavLink>
        <NavLink to="/about" activeClassName="link-active">关于</NavLink>
        <NavLink to="/profile" activeClassName="link-active">我的</NavLink>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/about' component={AboutManualJump}></Route>
          <Route path='/profile' component={Profile}></Route>
          <Route path='/product' component={Product}></Route>
        </Switch> */}
        {/* 如果该组件不是通过 Route方式渲染出来的 要使用withRouter包裹才能使用 history属性 */}
        {/* <button onClick={e => this.jumpToProduct()}>商品</button> */}
        {/* 源码解读: react-router-dom中并没有 withRouter react-router-dom只是做了一层中转,withRouter在react-router中 */}
        

        {/* 6.动态路由 */}
        {/* <NavLink to="/" exact activeClassName="link-active">首页</NavLink>
        <NavLink to="/profile" activeClassName="link-active">我的</NavLink>
        <NavLink to={`/detial/${id}`} activeClassName="link-active">详情</NavLink>

        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/profile' component={Profile}></Route>
          <Route path='/detial/:id' component={Detail}></Route>
        </Switch> */}



        {/* 7.路由传参 */}
        {/* <NavLink to="/" exact activeClassName="link-active">首页</NavLink>
        <NavLink to="/profile" activeClassName="link-active">我的</NavLink> */}
        {/* 7.1动态路由 */}
        {/* <NavLink to={`/detial/${id}`} activeClassName="link-active">详情</NavLink> */}
        {/* 7.2search传参 */}
        {/* <NavLink to={`/detial2?name=ding&age=18`} activeClassName="link-active">详情2</NavLink> */}
        {/* 7.3to属性 */}
        {/* <NavLink to={{
                  pathname: "/detial3",
                  search: "name=abc",
                  state: info
                 }} 
                activeClassName="link-active">
          详情3
        </NavLink>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/profile' component={Profile}></Route>
          <Route path='/detial/:id' component={Detail}></Route>
          <Route path='/detial2' component={Detail2}></Route>
          <Route path='/detial3' component={Detail3}></Route>
        </Switch> */}


        {/* 8.react-router-config路由配置集中管理 */}
        <NavLink to="/" exact activeClassName="link-active">首页</NavLink>
        <NavLink to="/about"  activeClassName="link-active">关于</NavLink>
        <NavLink to="/profile" activeClassName="link-active">我的</NavLink>
        {renderRoutes(routes)}
      </div>
    )
  }

  // * 5.手动路由跳转的第二种方式
  jumpToProduct() {
    this.props.history.push("/product");
  }
}

export default withRouter(App);
