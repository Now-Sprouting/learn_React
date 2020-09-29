import React, { useState, useMemo } from 'react'

function caculateNum(num) {
    console.log('函数重新执行');
    let total = 0
    for (let i = 1; i < num; i++) {
        total += i;
    }
    return total
}
export default function MemoHookDemo01() {
    const [count, setcount] = useState(10)
    const [show, setshow] = useState(true)
    
    // const total = caculateNum(count)
    // *使用 useMemo 做性能优化 (切换时不会执行 caculateNum函数了)
    const total = useMemo(() => caculateNum(count), [count])
    return (
        <div>
            <h2>计算数字的和{total}</h2>
            <button onClick={e => { setcount(count + 1) }}>count + 1</button>
            <button onClick={e => { setshow(!show) }}>切换</button>
        </div>
    )
}
