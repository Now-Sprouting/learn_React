import React, { PureComponent } from 'react'
import { Button } from 'antd'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import './SwitchTransition.css'

export default class SwitchTransitionDemo extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            isOn: true
        }
    }
    render() {
        const { isOn } = this.state;
        return (
            <div style={{ textAlign: 'center', padding: '40px' }}>
                <hr />
                <SwitchTransition mode="out-in">
                    <CSSTransition
                        key={isOn ? "on" : "off"}
                        timeout={500}
                        classNames="btn"
                    >
                        <Button type="primary" onClick={e => { this.setState({ isOn: !isOn }) }}>
                            {isOn ? 'on' : 'off'}
                        </Button>
                    </CSSTransition>
                </SwitchTransition>
            </div>
        )
    }
}
