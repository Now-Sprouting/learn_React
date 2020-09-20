import React, { PureComponent, createRef } from 'react'

class Counter extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        }
    }

    render() {
        return (
            <div>
                <h2>当前计数: {this.state.counter}</h2>
                <button onClick={e => this.increment()}>+1</button>
            </div>
        )
    }

    increment() {
        this.setState({
            counter: this.state.counter + 1
        })
    }
}

export default class App extends PureComponent {
    constructor(props) {
        super(props)
        this.newRef = createRef();
        this.counterRef = createRef();
        this.titleEle = null;
    }
    render() {
        return (
            <div>
                {/* ref 可传参数 字符串,对象(推荐),函数 */}
                <h2 ref="titleRef">Hello World</h2>
                <button onClick={e => { this.chnageMessage1() }}>change</button>
                <h2 ref={this.newRef}>Hello World</h2>
                <button onClick={e => { this.chnageMessage2() }}>change</button>
                <h2 ref={arg => this.titleEle = arg}>Hello World</h2>
                <button onClick={e => { this.chnageMessage3() }}>change</button>
                {/* ref 在组件中使用,直接可以调用子组件中的方法 */}
                <Counter ref={this.counterRef}/>
                <button onClick={e => {this.changeCounter()}}>加</button>
            </div>
        )
    }
    // *方式一 字符串(不推荐使用,后续可能被删除)
    chnageMessage1() {
        this.refs.titleRef.innerHTML = 'Hello React'
    }
    // *方式二 对象(推荐使用)
    chnageMessage2() {
        this.newRef.current.innerHTML = 'Hello React'
    }
    // *方式三 回调函数方式
    chnageMessage3() {
        this.titleEle.innerHTML = 'Hello React'
    }

    // *在组件中使用ref,可以直接调用子组件中的方法
    changeCounter() {
        this.counterRef.current.increment()
    }
}
