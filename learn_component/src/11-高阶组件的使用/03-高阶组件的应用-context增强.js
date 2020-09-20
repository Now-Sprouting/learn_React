import React, { createContext, PureComponent } from 'react'

// *创建Contetx对象实现跨组件之间通信
const UserContxt = createContext({
    name: 'admin',
    password: 'admin',
    sex: 'male'
})
class Home extends PureComponent {
    // *如果存在多组件的话,每个组件都需要写一遍 UserContxt.Consumer这样很不方便,04就是高阶组件对context的优化
    render() {
        return (
            <UserContxt.Consumer>
                {
                    user => {
                        return (
                            <div>
                                <h2>Home:</h2>
                                <h3>{user.name + user.password + user.sex}</h3>
                            </div>
                        )
                    }
                }
            </UserContxt.Consumer>
        )
    }
}
class About extends PureComponent {
    render() {
        return (
            <UserContxt.Consumer>
                {
                    user => {
                        return (
                            <div>
                                <h2>About:</h2>
                                <h3>{user.name + user.password + user.sex}</h3>
                            </div>
                        )
                    }
                }
            </UserContxt.Consumer>
        )
    }
}

export default class APP extends PureComponent {
    constructor() {
        super()
        this.state = {
            name: 'Ding',
            password: 'Ding',
            sex: 'male'
        }
    }
    render() {
        return (
            <div>
                <UserContxt.Provider value={this.state}>
                    <Home />
                    <About />
                </UserContxt.Provider>
            </div>
        )
    }
}
