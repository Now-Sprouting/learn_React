import React, {memo, useState, useMemo} from 'react'

// *只嵌套一层memo,改变 show 子组件依旧重新渲染(因为执行setshow 之后 MemoHookDemo2就会重新渲染, 重新创建info memo浅层次比较 判断发生改变)
// *解决方案一:将 const info 声明方式改为 useState就不会重新渲染
// *解决方案二:使用useMemo
const SonInfo = memo(
    (props) => {
        console.log('SonInfo重新渲染');
        return <h2>名字:{props.info.name} 年龄:{props.info.age}</h2>
    }
)
export default function MemoHookDemo2() {
    console.log('MemoHookDemo2重新渲染');
    const [show, setshow] = useState(true)
    // const info = { name: '张三', age: 18 }

    const info = useMemo(() => ({ name: '张三', age: 18 }), [])
    return (
        <div>
            <SonInfo info={info} />
            <button onClick={e => { setshow(!show) }}>切换</button>
        </div>
    )
}
