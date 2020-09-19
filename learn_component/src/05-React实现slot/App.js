import React, { Component } from 'react';
import NavBar from './NavBar'
import NavBar1 from './NavBar1'

export default class App extends Component {
    render() {
        return (
            <div>
                <NavBar>
                    <a href="http://www.baidu.com">百度一下</a>
                    <span>按顺序排放</span>
                    <span>按顺序排放</span>
                </NavBar>
                <NavBar1 leftSlot={<span>百度一下</span>} middleSlot={<span>不使用props.children</span>} 
                        rightSlot={<span>不使用props.children</span>}/>
            </div>
        );
    }
}
