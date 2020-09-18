import React, { Component } from 'react'

class Son extends Component {
    render() {
        const {increment} = this.props;
        return (
            <button onClick={increment}>+ 1</button>
        )
    }
}

export default class Parent extends Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
    }
    render() {
        return (
            <div>
                <h2>{this.state.counter}</h2>
                <button onClick={e => {this.increment()}}>+</button>
                <Son increment={ e => {this.increment()}}/>
            </div>
        )
    }
    increment() {
        this.setState(
            {
                counter: this.state.counter + 1
            }
        )
    }
}
