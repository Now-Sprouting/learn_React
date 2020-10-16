import React, { useState, useRef, useEffect } from 'react'


// *代码执行顺序, 点击按钮--->改变 count ---> 渲染return ---> 执行 useEffect()函数(因为prevRef的值是useRef产生的,所以他发生改变不不会导致组件的重新渲染)
export default function RefHookDemo03() {
    const [count, setcount] = useState(0)
    const prevRef = useRef(count)
    useEffect(() => {
        prevRef.current = count
    }, [count])
    return (
        <div>
            <h2>Count现在的值:{count}</h2>
            <h2>Count上次的值:{prevRef.current}</h2>
            <button onClick={e => { setcount(count + 10) }}>+ 10</button>
        </div>
    )
}
