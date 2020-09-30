import React, { useState, useEffect } from 'react'

export default function UseEffectDemo() {
    // *页面执行过程  点击按钮--->count变成0--->return执行diff算法比较后页面渲染--->执行useEffect() Hook
    const [count, setcount] = useState(10)
    useEffect(() => {
        if (count === 0) {
            setcount(Math.random() + 200)
        }
    }, [count])
    return (
        <div>
            <h2>当前计数: {count}</h2>
            <button onClick={e => { setcount(0) }}>修改count</button>
        </div>
    )
}
