import React, { useRef, useState } from 'react'

export default function RefHookDemo02() {
    const [count, setcount] = useState(0);
    // *useRef函数中也可以传递参数, 作为返回值的current
    const NumRef = useRef(count)
    return (
        <div>
            <h2>Count中的值: {count}</h2>
            <h2>NumRef.current中的值: {NumRef.current}</h2>
            {/* 点击按钮 只有Count才会加上10 因为useRef返回的对象在整个生命周期中保持不变 */}
            <button onClick={e => {setcount(count + 10)}}>+ 10</button>
        </div>
    )
}
