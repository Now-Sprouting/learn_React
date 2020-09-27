import React, { PureComponent } from 'react'
import {
    BrowserRouter, Route, Link
} from 'react-router-dom'
import Home from './Home.js'
import About from './About.js'


export default class App extends PureComponent {
    render() {
        return (
            <BrowserRouter>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                
                <Link to='/'>首页</Link>
                <Link to='/about'>关于</Link>
            </BrowserRouter>
        )
    }
}
