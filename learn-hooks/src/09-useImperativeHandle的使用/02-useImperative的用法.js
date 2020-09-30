import React, { forwardRef, useRef, useImperativeHandle } from 'react'

// *在上面的 forwordRef 中父组件可以 帮助子组件完成子组件所要做的所有事情,有时候我们需要限制父组件的操作(把需要父组件做的和不需要父组件做的事情都给罗列出来, 这时候就用到了 useImperative这个 Hook)

const SonInput = forwardRef((props, ref) => {
    // *参数 ref 传递过程: 从父组件的 ref 接收到 inputRef --->useImperative使用这个ref ---> 把函数返回的对象绑定到inputRef 的current上面

    // *这里的 ownRef 是Son组件中自己的 ref 
    const ownRef = useRef()
    useImperativeHandle(
        ref,
        () => ({
            focus: () => {ownRef.current.focus()}
        }),
        [ownRef.current]
    )
    return <input type="text" ref={ownRef} />
})


export default function UseImperativeHookDemo() {
    const inputRef = useRef();
    return (
        <div>
            <SonInput ref={inputRef} />
            <button onClick={e => { inputRef.current.focus() }}>聚焦</button>
        </div>
    )
}
