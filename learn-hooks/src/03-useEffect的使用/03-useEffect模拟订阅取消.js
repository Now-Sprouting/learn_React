import React, {useState, useEffect} from 'react'

export default function SubscribeToCancle() {
    const [count, setCount] = useState(0)
    // *useEffect 第一个参数的返回参数相当于 class 组件中的 componentWillUnMount
    // *只要数据发生更新,就会执行useEffect() 如果希望useEffect()只在订阅和取消的时候打印的话,应该添加第二个参数[]
    console.log('渲染组件');
    useEffect(() => {
        console.log('订阅成功')
        return ()=> {
            console.log('取消订阅成功')
        }
    },[])
    return (
        <div>
            <h2>当前计数:{count}</h2>
            {/* 只要数据发生更新,就会执行useEffect() 如果希望useEffect()只在订阅和取消的时候打印的话,应该添加第二个参数[]*/}
            <button onClick = {e => {setCount(count + 1)}}> + 1</button>
        </div>
    )
}
