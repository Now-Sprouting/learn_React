import React, { Component } from 'react'

// 1.创建Context对象(大括号中的值为默认值:可以不传递)
const UserContext = React.createContext({
    userName: 'zhangsan',
    passWord: 'admin'
})


class User extends Component {
    render() {
        return (
            <div>
                <div>用户</div>
                <Usernotic />
            </div>
        )
    }
}

class Usernotic extends Component {
        render() {
            // console.log(this.context);
            return (
                <div>
                    <div>用户列表</div>
                    {/*this.context 就可以拿到 value传递过来的值*/}
                    <div>用户名: {this.context.userName}</div>
                    <div>密码: {this.context.passWord}</div>
                </div>
            )
        }
}
// 3. 通过设置Usernotic.contextType来获取到 UserContext Provider过来的值
Usernotic.contextType = UserContext;

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: 'admin',
            passWord: 'admin'
        }
    }
    render() {
        return (
            <div>
                {/*2. 通过创建的 Context对象 UserContext的Provider 的value传递数据 */}
                <UserContext.Provider value={this.state}>
                    <User/>
                </UserContext.Provider>
            </div>
        )
    }
}
