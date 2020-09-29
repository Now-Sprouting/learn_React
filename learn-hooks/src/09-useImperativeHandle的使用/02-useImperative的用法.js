import React from 'react'

// *在上面的 forwordRef 中父组件可以 帮助子组件完成子组件所要做的所有事情,有时候我们需要限制父组件的操作(把需要父组件做的和不需要父组件做的事情都给罗列出来, 这时候就用到了 useImperative这个 Hook)
export default function UseImperativeHookDemo() {
    return (
        <div>
            UseImperativeHookDemo
        </div>
    )
}
