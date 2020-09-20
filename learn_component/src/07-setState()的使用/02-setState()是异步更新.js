import React, { Component } from 'react';

export default class APP extends Component {
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
            </div>
        );
    }
    componentDidUpdate() {
        console.log(this.state.message);
    }
    changeMessage() {
        // setState是异步更新
        //* 一.为什么要实现异步更新?
        // 1.setState设计成异步,可以显著的提升性能
        // 2.如果同步更新了state,但还没有执行render函数,那么state和props就不能保持同步
        //* 二.setState异步更新如何拿到异步更新后的state?
        // 1.通过setState后面的回调函数
        // 2.通过componentDidUpdate生命周期函数
        this.setState({
            message : '你好,React'
        }, () => {
            console.log(this.state.message);
        })
        console.log(this.state.message);
    }
}
