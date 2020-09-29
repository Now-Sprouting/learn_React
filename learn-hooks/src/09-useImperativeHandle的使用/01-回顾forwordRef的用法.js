import React, { forwardRef, useRef } from 'react'

// *回顾函数式组件的 forwardRef 的使用
const SonInput = forwardRef((props, ref) => {
    return <input type="text" ref={ref}/>
})
export default function ForwordRefDemo() {
    const inputRef = useRef()
    return (
        <div>
            <SonInput ref={inputRef}/>
            <button onClick={e => {inputRef.current.focus()}}>聚集</button>
        </div>
    )
}
