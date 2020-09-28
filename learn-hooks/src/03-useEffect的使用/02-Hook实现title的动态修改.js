import React, {useState, useEffect} from 'react'

export default function ChangeTitleByHook() {
    const [count, setCount] = useState(0)
    // *注: 不管是首次渲染还是发生更新后的渲染都会执行 useEffect 中的回调函数
    useEffect(() => {
        document.title = count
    })
    return (
        <div>
            <h2>当前计数:{count}</h2>
            <button onClick ={ e => {setCount(count + 1)}}>+ 1</button>
        </div>
    )
}
