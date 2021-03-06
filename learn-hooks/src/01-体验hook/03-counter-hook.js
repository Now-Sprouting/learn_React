// *简便写法
import React, { useState } from 'react'

export default function ClassHook2() {
    // *Hook要在函数的最外层调用
    const [state, setState] = useState(0)
    return (
        <div>
            <h2>当前计数:{state}</h2>
            <button onClick={e => setState(state + 1)}>+ 1</button>
            <button onClick={e => setState(state - 1)}>- 1</button>
        </div>
    )
}
