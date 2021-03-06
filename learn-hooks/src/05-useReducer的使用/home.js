import React, { useReducer } from 'react'
// *useReducer仅仅是useState的一种替代方案,并不能像redux那样实现数据共享

import reducer from './reducer'
export default function Home() {
    const [state, dispatch] = useReducer(reducer, { counter: 0 })
    return (
        <div>
            <h2>当前计数:{state.counter}</h2>
            <button onClick={e => dispatch({ type: 'increment' })}>+ 1</button>
            <button onClick={e => dispatch({ type: 'decrement' })}>- 1</button>
        </div>
    )
}
