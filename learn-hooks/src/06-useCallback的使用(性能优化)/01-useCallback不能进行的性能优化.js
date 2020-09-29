import React, { useCallback, useState } from 'react'

export default function CallbackHookDemo01() {
    const [count, setcount] = useState(0)
    // *每次 count + 1 increment都会被重新定义一遍
    // *每次调用都有函数的创建过程
    const increment1 = () => {
        console.log('执行increment1函数')
        // *注: 每当setCount一遍, 组件中所有的代码都会重新执行一遍
        setcount(count + 1)
    }
    // *每次调用也有函数创建的过程,每次都会执行 useCallback 中的函数,每次都会创建
    // *只是 incremnet2 的每次返回值都不会发生改变
    // *所以这样使用 useCallback 并不会进行性能优化
    const increment2 = useCallback(() => {
        console.log('执行increment2函数')
        setcount(count + 1)
    }, [count])
    return (
        <div>
            <h2>CallbackHookDemo01</h2>
            <h2>当前计数{count}</h2>
            {/* 点击按钮就会执行 increment函数 */}
            <button onClick={increment1}>incremnet1</button>
            <button onClick={increment2}>incremnet2</button>
        </div>
    )
}
