import React, { Component } from 'react'

class Child extends Component {
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
