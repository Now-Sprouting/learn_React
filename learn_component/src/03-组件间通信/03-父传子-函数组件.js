import React, { Component } from 'react'

function Child(props) {
    const { name, age, height } = props;
    return (
        <h2>{name + age + height}</h2>
    )
}
export default class Parent extends Component {
    render() {
        return (
            <div>
                <Child name='Ding' age='18' height='180' />
            </div>
        )
    }
}
