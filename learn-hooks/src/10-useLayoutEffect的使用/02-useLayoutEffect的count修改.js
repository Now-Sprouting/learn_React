import React, { useState, useLayoutEffect } from 'react'

export default function UseLayoutEffectDemo() {
    // *页面执行过程  点击按钮--->count变成0--->useLayoutEffect Hook触发--->修改 count --->retur最新组件--->页面重新渲染
    const [count, setcount] = useState(10)
    useLayoutEffect(() => {
        if (count === 0) {
            setcount(Math.random())
        }
    }, [count])
    return (
        <div>
            <h2>当前计数: {count}</h2>
            <button onClick={e => { setcount(0) }}>修改count</button>
        </div>
    )
}
