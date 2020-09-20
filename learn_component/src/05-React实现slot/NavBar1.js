import React, { Component } from 'react'
import './style.css'
export default class NavBar2 extends Component {
    //* 除了只传一个插槽之外很少使用,this.prop.children的方式
    render() {
        const {leftSlot, middleSlot, rightSlot} = this.props;
        return (
            <div className="nav-bar">
                <div className="nav-left">
                    {leftSlot}
                </div>
                <div className="nav-middle">
                    {middleSlot}
                </div>
                <div className="nav-right">
                    {rightSlot}
                </div>
            </div>
        )
    }
}
