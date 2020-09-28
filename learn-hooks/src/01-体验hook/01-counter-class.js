import React, { PureComponent } from 'react'

export default class ClassRouter extends PureComponent {
    constructor() {
        super()
        this.state = {
            counte: 0
        }
    }
    render() {
        return (
            <div>
                <h2>当前计数:{this.state.counte}</h2>
                <button onClick={e => this.increment()}>+1</button>
                <button onClick={e => this.decrement()}>-1</button>
            </div>
        )
    }
    increment() {
        this.setState({
            counte: this.state.counte + 1
        })
    }
    decrement() {
        this.setState({
            counte: this.state.counte - 1
        })
    }
}
