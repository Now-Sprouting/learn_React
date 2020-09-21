import React, { PureComponent } from 'react'
import Home from '../Home'
import About from '../About'
import styled, { ThemeProvider } from 'styled-components'

// *styled-components高级特性1.: 实现继承
// *styled-components高级特性2.:主题
const HYButton = styled.button`
  padding: 10px 20px;
  border-color: red;
  color: red;
`
const HYPrimaryButton = styled(HYButton)`
  color: #fff;
  background-color: green;
`


export default class App extends PureComponent {
    render() {
        return (
            <ThemeProvider theme={{themeColor: "red", fontSize: "30px"}}>
                app
                <Home />
                <About />
                <hr />
                <HYButton />
                <HYPrimaryButton />
            </ThemeProvider>
        )
    }
}
