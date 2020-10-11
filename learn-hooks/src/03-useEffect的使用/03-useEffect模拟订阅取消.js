import React, {useState, useEffect} from 'react'

export default function SubscribeToCancle() {
    const [count, setCount] = useState(0)
    // *useEffect 第一个参数的返回参数相当于 class 组件中的 componentWillUnMount
    useEffect(() => {
        console.log('订阅成功')
        return ()=> {
            console.log('取消订阅成功')
        }
    })
    return (
        <div>
            <h2>当前计数:{count}</h2>
            <button onClick = {e => {setCount(count + 1)}}> + 1</button>
        </div>
    )
}
