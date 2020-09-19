import React, { Component } from 'react';

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
    }
    render() {
        return (
            <div>
                <h2>{this.state.counter}</h2>
                <button onClick={e => {
                    this.handleAdd()
                }}>+</button>
            </div>
        );
    }
    handleAdd() {
        // 1.setState本身会进行合并,执行最后一次setState()
        // this.setState({
        //     counter: this.state.counter + 1
        // })
        // this.setState({
        //     counter: this.state.counter + 2
        // })
        // this.setState({
        //     counter: this.state.counter + 3
        // })
        // 2.通过函数分方法,让setState合并时进行累加
        this.setState((prevState) => {
            return {
                counter: prevState.counter + 1
            }
        })
        this.setState((prevState) => {
            return {
                counter: prevState.counter + 1
            }
        })
        this.setState((prevState) => {
            return {
                counter: prevState.counter + 1
            }
        })
    }
}