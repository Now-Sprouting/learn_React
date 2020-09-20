import React, { PureComponent } from 'react'
import { EventEmitter } from 'events'

// * 1.创建事件总线对象 eventBus
const eventBus = new EventEmitter()
class Home extends PureComponent {
    render() {
        return (
            <h2>Home</h2>
        )
    }
    // *3.一般事件监听都会放在componentDidMounte生命周期函数中
    componentDidMount() {
        // *4.接收任务
        eventBus.addListener('sayHello', this.handleSayHelloListener)
    }
    //* 5.为了性能考虑,一般事件监听的销毁都会放到componentWillUnmount生命周期中
    componentWillUnmount() {
        //* 6.只会移除 handleSayHelloListener事件
        eventBus.removeListener('sayHello', this.handleSayHelloListener)
    }
    handleSayHelloListener(num, message) {
        console.log(num, message)
    }
}
class Profile extends PureComponent {
    render() {
        return (
            <div>
                <h2>Profile</h2>
                <button onClick={e => {this.transmitEvent()}}>向Home组件传递事件</button>
            </div>
        )
    }
    transmitEvent() {
        // * 2.通过eventBus 的 emit API发出任务
        eventBus.emit('sayHello', 20, 'Hello Home');
    }
}
export default class App extends PureComponent {
    render() {
        return (
            <div>
                <Home />
                <Profile />
            </div>
        )
    }
}
