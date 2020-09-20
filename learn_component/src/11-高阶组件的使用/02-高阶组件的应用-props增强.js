import React, { PureComponent } from 'react'
// *写一个通用的高阶组件,统一在props中增加height属性
function hanceComponent(WrappedComponent) {
    class NewComponentr extends PureComponent {
        render() {
            return <WrappedComponent {...this.props} height={180}/>
        }
    }
    return NewComponentr
}
class Home extends PureComponent {
    render() {
        return (
        <h2>{`Home:${this.props.name}  ${this.props.age} ${this.props.height}`}</h2>
        )
    }
}

class Profile extends PureComponent {
    render() {
        return (
            <h2>{`Profile:${this.props.name}  ${this.props.age} ${this.props.height}`}</h2>
        )
    }
}
const NewHome = hanceComponent(Home)
const NewProfile = hanceComponent(Profile)
export default class App extends PureComponent {
    render() {
        return (
            <div>
                <NewHome name='Ding' age={18} />
                <NewProfile name='Zhang' age={40} />
            </div>
        )
    }
}
