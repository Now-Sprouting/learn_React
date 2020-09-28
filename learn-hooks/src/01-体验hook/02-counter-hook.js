import React, { useState } from 'react'

export default function ClassHook() {
    // *1. Hook 中的useState() 函数,来自react包,
    // *2. 参数和返回值
    // *参数 :给创建出来的状态一个默认值
    // *返回值: 数组
    // 元素1:当前state中的值
    // 元素2:设置新的值时使用的函数
    const arr = useState(0);
    const state = arr[0];
    const setState = arr[1];
    return (
        <div>
            <h2>当前计数: {state}</h2>
            <button onClick={e => setState(state + 1)}>+ 1</button>
            <button onClick={e => setState(state - 1)}>- 1</button>
        </div>
    )
}
