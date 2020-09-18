import React, { Component } from 'react'
// 父传子属性验证要引入包文件
import PropTypes from 'prop-types'
function Child(props) {
    const { name, age, height } = props;
    return (
        <h2>我是函数组件{name + age + height}</h2>
    )
}
// 类组件属性验证
class Child1 extends Component {
    static propTypes = {
        name: PropTypes.string,
        age: PropTypes.string
    }
    static defaultProps = {
        height: '190'
    }
    render() {
        const { name, age, height } = this.props;
        return (
            <h2>我是类组件{name + age + height}</h2>
        )
    }
}
// 函数组件属性验证（类组件也可以使用这种写法）
Child.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.string
}
Child.defaultProps = {
    height: '180'
}
export default class Parent extends Component {
    render() {
        return (
            <div>
                <Child name='Ding' age='18' />
                <Child1 name='Zhang' age='40' />
            </div>
        )
    }
}
