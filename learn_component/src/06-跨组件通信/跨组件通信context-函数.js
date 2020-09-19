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

// 3.函数式组件特殊写法,通过UserContext.Consumer包裹拿到传递过来的value值
function Usernotic() {
    return (
        <UserContext.Consumer>
            {
                value => {
                    return (
                        <div>
                            <h2>用户名: {value.userName}</h2>
                            <h2>密码: {value.passWord}</h2>
                        </div>
                    )
                }
            }
        </UserContext.Consumer>
    )
}

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
