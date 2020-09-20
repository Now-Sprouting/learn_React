import React, { Component } from 'react';

class APP extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: 'Hello React',
            name: 'Ding'
        }
    }
    render() {
        return (
            <div>
                <h2 onClick={e => {this.changeMessage()}}>{this.state.message}</h2>
                <h2>name: {this.state.name}</h2>
            </div>
        );
    }
    changeMessage() {
        //* 为什么修改message不会对name属性造成影响
        // 源码中用到了Object.assign({}, state, {message: '你好,React'}) 
        this.setState({
            message: '你好,React'
        })
    }
}

export default APP;