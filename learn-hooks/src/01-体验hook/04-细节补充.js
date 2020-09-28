import React, {useState} from 'react'

export default function ClassHook3() {
    // *1. useState中也可以传递一个函数作为参数
    const [count, setCount] = useState(() => 10)
    function changeCount() {
        // *最终会合并成一个setCount
        // setCount(count + 10)
        // setCount(count + 10)
        // setCount(count + 10)
        // setCount(count + 11)    

        // *2. 传递一个函数最后不会合并  (和setState相同)
        setCount((prevCount) => 
            prevCount + 10
        )
        setCount((prevCount) => 
            prevCount + 10
        )
        setCount((prevCount) => 
            prevCount + 10
        )
        setCount((prevCount) => 
            prevCount + 10
        )
    }
    return (
        <div>
            <h2>细节补充</h2>
            <h2>当前计数:{count}</h2>
            <button onClick={e => {setCount(count + 1)}}>+ 1</button>
            <button onClick={e => {changeCount()}}>+ 10</button>
        </div>
    )
}
