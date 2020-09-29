import React, { useRef, PureComponent } from 'react'

class TestC extends PureComponent {
    render() {
        return (
            <div>
                <h2>TestC</h2>
            </div>
        )
    }
    fn() {
        console.log(123);    
    }
}



export default function RefHookDemo01() {
    const titleRef = useRef();
    const inputRef = useRef();
    const testCRef = useRef();
    function changeDOM() {
        titleRef.current.innerHTML = 'Hello React'
        inputRef.current.focus();
        // *可以直接拿到类组件的所有
        console.log(testCRef.current);
        // *不可以直接拿到函数式组件的所有
    }
    return (
        <div>
            <h2 ref={titleRef}>RefHookDemo01</h2>
            <input ref={inputRef} type="text" />
            <button onClick={e => { changeDOM() }}>修改DOM</button>
            <TestC ref={testCRef} />
        </div>
    )
}
