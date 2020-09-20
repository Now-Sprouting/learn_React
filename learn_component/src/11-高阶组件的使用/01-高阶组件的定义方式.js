import React, { PureComponent } from 'react'

class App extends PureComponent {
    render() {
        return (
            //* 正常情况下接收不到父组件传递过来的props,需要在NewComponent中做中转
            <div>
                app:{this.props.name}
            </div>
        )
    }
}
// *类的形式
function enhanceComponent(WrappedComponent) {
    class NewComponent extends PureComponent {
        render() {
            return <WrappedComponent {...this.props}/>
        }
    }
    // *修改 React插件中的名字
    NewComponent.displayName = 'Ding'
    return NewComponent
}
// *函数形式
function enhanceComponent2(WrappedComponent) {
    function NewComponent(props) {
        return <WrappedComponent {...props}/>
    }
    NewComponent.displayName = 'Ding'
    return NewComponent
}
// const EnhanceComponent = enhanceComponent(App)
const EnhanceComponent = enhanceComponent2(App)
export default EnhanceComponent