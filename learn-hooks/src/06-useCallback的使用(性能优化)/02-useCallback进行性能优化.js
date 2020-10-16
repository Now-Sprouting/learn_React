import React, { memo, useCallback, useState } from 'react'
// *useCallback 的使用场景: 在一个组件中定义的函数, 传递给子元素进行回调时, 使用useCallback函数进行处理


// *加上 memo 后 点击 重新渲染, increment1 会重新赋值(在内存开辟一块内存空间),传给 props 发生浅层次比较,所以 increment1 会重新渲染
// *incremnet2 因为有 useCallback 只依赖于 count才会发生改变, 所以 incremnet2不会重新渲染,这就是useCallback的最主要的作用
const SonBtn = memo(
    (props) => {
        console.log('SonBtn子组件被执行' + props.title);
        return <button onClick={props.increment}>SonBtn + 1</button>
    }
)

export default function CallbackHookDemo02() {
    // *只要父组件重新渲染,子组件必然重新渲染
    console.log('CallbackHookDemo02重新渲染');
    const [count, setcount] = useState(0)
    const [show, setshow] = useState(false)

    const increment1 = () => {
        console.log('执行increment1函数')
        setcount(count + 1)
    }
    const increment2 = useCallback(() => {
        console.log('执行increment2函数')
        setcount(count + 1)
    }, [count])
    
    // *useMemo实现 useCallback()
    // *useCallback 和 useMemo的区别: useCallback是对函数进行优化, useMemo是对函数的返回值进行优化
    // const increment2 = useMemo(() => {
    //    return () => {
    //     console.log('执行increment2函数')
    //     setcount(count + 1)
    //    }
    // }, [count])
    return (
        <div>
            <h2>CallbackHookDemo02</h2>
            <h2>当前计数{count}</h2>
            <SonBtn increment={increment1} title='incremnet1'/>
            <SonBtn increment={increment2} title='incremnet2'/>
            <button onClick={e => {setshow(!show)}}>重新渲染</button>
        </div>
    )
}
