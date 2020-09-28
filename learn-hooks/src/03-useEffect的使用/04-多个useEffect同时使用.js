import React, {useState, useEffect} from 'react'

export default function MutiUseEffect() {
    const [count, setCount] = useState(0)
    // *使用多个useEffect
    // *useEffect 的第二个参数 数组中的数表示只有当 数组中的值发生变化时才会重新执行
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
