import React, {useState, useEffect} from 'react'

export default function MutiUseEffect() {
    const [count, setCount] = useState(0)
    // *使用多个useEffect
    // *所有useEffect 在页面第一次加载的时候都会渲染一遍
    // *useEffect 的第二个参数 数组中的数表示只有当数组中的值发生变化时才会重新执行,如果第二个参数为[], 那么这个钩子只会在页面第一次渲染的时候加载
    useEffect(() => {
        console.log("修改DOM", count);
      }, [count]);
    
      useEffect(() => {
        console.log("订阅事件");
      }, []);
    
      useEffect(() => {
        console.log("网络请求");
      }, []);
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={e => {setCount(count + 1)}}>+ 1</button>
        </div>
    )
}
