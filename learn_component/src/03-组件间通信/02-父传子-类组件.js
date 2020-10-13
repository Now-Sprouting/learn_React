import React, { Component } from 'react'

class Child extends Component {
    // *为什么不使用constructor和super(props)定义props render函数中还能使用props
    // *A :因为React内部已经做过处理,不调用默认在render函数中也能使用props
    // constructor() {
    //     super()
    // }
    render () {
        const {name, age, height} = this.props;
        return (
        <h2>{'我叫：' + name + '年龄：' + age + '身高：' + height}</h2>
        )
    }
}
export default class Parent extends Component {
    render() {
        return (
            <div>
                <Child name='Ding' age='18' height='180'/>
            </div>
        )
    }
}
