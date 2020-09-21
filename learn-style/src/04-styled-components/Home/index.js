import React, { PureComponent } from 'react'

import HomeWrappser from './style'
export default class Home extends PureComponent {
    render() {
        return (
            <HomeWrappser>
                Home
                <div className="banner">
                    <span className="active">轮播图1</span>
                    <span>轮播图2</span>
                    <span>轮播图3</span>
                    <span>轮播图4</span>
                </div>
            </HomeWrappser>
        )
    }
}
