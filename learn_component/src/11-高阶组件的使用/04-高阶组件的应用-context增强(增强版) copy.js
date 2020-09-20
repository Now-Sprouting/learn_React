import React, { createContext, PureComponent } from 'react'

//* 定义一个高阶组件
function withUser(WrappedComponent) {
    return props => {
        return (
            <UserContxt.Consumer>
            {
                user => {
                    return <WrappedComponent {...user} {...props}/>
                }
            }
        </UserContxt.Consumer>
        )
    }
}
// *创建Contetx对象实现跨组件之间通信
const UserContxt = createContext({
    name: 'admin',
    password: 'admin',
    sex: 'male'
})
class Home extends PureComponent {
    render() {
        return (
        <h2>{this.props.name + this.props.password + this.props.sex}</h2> 
        )
    }
}
class About extends PureComponent {
    render() {
        return (
            <ul>
                <li>{this.props.name}</li>
                <li>{this.props.password}</li>
                <li>{this.props.sex}</li>
            </ul>
        )
    }
}
const NewHome = withUser(Home)
const NewAbout = withUser(About)
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
                    <NewHome />
                    <NewAbout />
                </UserContxt.Provider>
            </div>
        )
    }
}
