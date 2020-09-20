import React, { PureComponent } from 'react'


function withAuth(WrappedComponent) {
    return props => {
        if (props.isLogin === false) {
            return <LoginPage/>
        } else {
            return <WrappedComponent/>
        }
    }
}
class LoginPage extends PureComponent {
    render() {
        return (
            <h2>LoginPage</h2>
        )
    }
}
class CartPage extends PureComponent {
    render() {
        return (
            <h2>CartPage</h2>
        )
    }
}
const NewCartPage =  withAuth(CartPage)
export default class App extends PureComponent {
    render() {
        return (
            <div>
                <NewCartPage isLogin={false} />
            </div>
        )
    }
}
