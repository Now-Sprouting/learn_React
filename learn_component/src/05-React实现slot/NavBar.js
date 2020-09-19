import React, { Component } from 'react'
import './style.css'
export default class NavBar extends Component {
    // 除了只传一个插槽之外很少使用,this.prop.children的方式
    render() {
        return (
            <div className="nav-bar">
                <div className="nav-left">
                    {this.props.children[0]}
                </div>
                <div className="nav-middle">
                    {this.props.children[1]}
                </div>
                <div className="nav-right">
                    {this.props.children[2]}
                </div>
            </div>
        )
    }
}
