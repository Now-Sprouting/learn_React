import React, { PureComponent } from 'react'
import styled from 'styled-components'

// *1. props穿透
// *2.属性的使用
// *3.传入state作为props
const IpWraper = styled.input.attrs({
    placeholder: 'please input',
    bcolor: 'red'
})`
    color: red;
    border-color: ${props => props.bcolor};
    background-color: ${props => props.color};
    /* 测试theme */
    background-color: ${props => props.theme.themeColor};
`
export default class About extends PureComponent {
    constructor() {
        super()
        this.state = {
            backgroundColoc: 'pink'
        }
    }
    render() {
        return (
            <div>
                <hr />
                About
                <IpWraper type="password" color={this.state.backgroundColoc} />
            </div>
        )
    }
}
