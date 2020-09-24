import React, { PureComponent } from 'react'
import CSStransition from './components/CSSTransition/CSSTransition'
import SwitchTransition from './components/SwichTransition/SwitchTransition'
import TransitionGroup from './components/TransitionGroup/TransitionGroupDemo.js'
export default class App extends PureComponent {
    render() {
        return (
            <div>
                <CSStransition/>
                <SwitchTransition/>
                <TransitionGroup/>
            </div>
        )
    }
}
