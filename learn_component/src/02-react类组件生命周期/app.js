import React from 'react'

// 1.constructor
// 如果不初始化state或不进行方法绑定,则不需要为React组件实现构造函数
// constructor生命周期方法中通常只做两件事
// (1)通过给this.state赋值对象来初始化组件内部 state
// (2)改变自定义方法的this指向, 如:this.increment(this)

// 2.componentDidMount
// componentDidMount会在组件挂载后(插入DOM树中)立即调用
// conponentDidMount通常会进行哪些操作呢?
// (1)依赖于DOM的操作可以在这里执行
// (2)网络请求(官方建议)
// (3)可以在此处添加一些订阅,(要在componenntWillUnmountr中取消订阅)

// 3.componnetDidUpdate
// componnetDidUpdate会在组件更新之后立即被执行,首次渲染不会执行
//(1)在组件更新后,可以在此处操作DOM
//(2)如果对更新前后的props进行比较,可以选择在此处执行网络请求

// 4.componentWillUnmount
// componentWillUnmount会在组件销毁前直接调用
// (此方法中执行必要的清理操作例如 清除定时器，取消或删除网络请求，在componnetDidMount中创建的订阅等)

class Cpn extends React.Component{
    render() {
        return (
            <h2>我是即将被移除的组件</h2>
        )
    }
    componentWillUnmount() {
        console.log('我是componentWillUnmount生命周期方法');
    }
}
export default class App extends React.Component {
    constructor() {
        console.log('我是constructor生命周期方法')
        super()
        this.state = {
            counter: 0,
            isShow: true
        }
    }
    render() {
        console.log('我是render生命周期方法');
        return (
            <div>
                <h2>我是类组件生命周期</h2>
                <h2>{this.state.counter}</h2>
                <button onClick={e => {
                    this.changeCounter()
                }}>+1</button>
                <hr/>
                <button onClick={e => {
                    this.switchComponent()
                }}>切换下面的组件</button>
                {this.state.isShow && <Cpn/>}
            </div>
        )
    }
    changeCounter() {
        // 会触发render生命周期方法和 componentDidUpdate生命周期方法
        this.setState({
            counter : this.state.counter + 1
        })
    }
    switchComponent() {
        this.setState({
            isShow: !this.state.isShow
        })
    }
    componentDidMount() {
        console.log('我是coMponentDidMount生命方法')
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('我是componentDidUpdate生命方法');
    }
}