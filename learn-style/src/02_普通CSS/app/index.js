import React, { PureComponent } from 'react'

import Home from '../Home/index'
import About from '../About/index'
import './style.css'

//*这种方式最大的缺点就是组件之间样式会重叠

export default class App extends PureComponent {
    render() {
        return (
            <div id="app">
                APP
                <Home />
                <About />
            </div>
        )
    }
}
