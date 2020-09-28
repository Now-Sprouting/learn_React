import React, { PureComponent } from 'react'

export class ChangeTitleByClass extends PureComponent {
    constructor() {
        super()
        this.state = {
            count : 0
        }
    }
    // *必须要写两个生命周期 因为 didMount 只会在首次加载时触发, didUpdate 只会在更新时触发
    componentDidMount() {
        document.title = this.state.count
    }
    componentDidUpdate() {
        document.title = this.state.count
    }
    render() {
        return (
            <div>
                <h2>当前计数{this.state.count}</h2>
                <button onClick= {e => {this.setState({count: this.state.count + 1})}}>+ 1</button>
            </div>
        )
    }
}

export default ChangeTitleByClass
