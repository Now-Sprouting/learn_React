import React, { Component } from 'react';

class APP extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: 'Hello React'
        }
    }
    render() {
        return (
            <div>
                <h2 onClick={e => {this.changeMessage()}}>{this.state.message}</h2>
                <button id="btn">changeMessage</button>
            </div>
        );
    }
    componentDidMount() {
        // 在这个生命周期函数中页面已经挂载完毕.可以操作DOM了
    
        document.getElementById('btn').addEventListener('click', () => {
            this.setState({
                message: '你好, React'
            })
            console.log(
                this.state.message
            );
        })
    }    
    changeMessage() {
        // 两种情况下setState()是同步更新
        // 1.在setTimeout中调用this.setState()是同步更新
        // 2.在原生DOM操作中,setState是同步
        setTimeout(() => {
            this.setState({
                message: '你好, React'
            })
            console.log(this.state.message);
        }, 0);
    }
}

export default APP;