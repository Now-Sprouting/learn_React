import React, { PureComponent } from 'react'
import Home from './components/Home.js'
import About from './components/About.js'
export default class App extends PureComponent {
    render() {
        return (
            <div>
                <Home/>
                <About/>
            </div>
        )
    }
}
