import React, { Component } from 'react'
import TabControl from './TabControl'

export default class app extends Component {
    constructor(props) {
        super()
        this.state = {
            currentT: 0,
            titles: ['小学生', '中学生', '大学生']
        }
    }
    render() {
        const {titles, currentT} = this.state
        return (
            <div>
                <TabControl names={['小学',  '中学' , '大学']} itemClick={index => {
                    this.changeTitle(index)
                }}/>
                <h2>{titles[currentT]}</h2>
            </div>
        )
    }
    changeTitle(index) {
       this.setState({
           currentT: index
       })
    }
}
