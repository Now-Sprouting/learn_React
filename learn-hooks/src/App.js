import React, { useState, createContext, useLayoutEffect } from 'react'
import ClassRouter from './01-体验hook/01-counter-class'
import ClassHook from './01-体验hook/02-counter-hook'
import ClassHook2 from './01-体验hook/03-counter-hook'
import ClassHook3 from './01-体验hook/04-细节补充'
import MutiState from './02-useState的使用/01-多个数据'
import ComplexState from './02-useState的使用/02-复杂数据的修改'
import ChangeTitleByClass from './03-useEffect的使用/01-class实现title的动态修改'
import ChangeTitleByHook from './03-useEffect的使用/02-Hook实现title的动态修改'
import SubscribeToCancle from './03-useEffect的使用/03-useEffect模拟订阅取消'
import MutiUseEffect from './03-useEffect的使用/04-多个useEffect同时使用'
import ContextHookDemo from './04-useContext的使用/useContext的使用';
import UseReducerHome from './05-useReducer的使用/home'
import UseReducerAbout from './05-useReducer的使用/about'
import CallbackHookDemo01 from './06-useCallback的使用(性能优化)/01-useCallback不能进行的性能优化'
import CallbackHookDemo02 from './06-useCallback的使用(性能优化)/02-useCallback进行性能优化'
import MemoHookDemo01 from './07-useMemo的使用(性能优化)/01-useMemo复杂计算的应用'
import MemoHookDemo2 from './07-useMemo的使用(性能优化)/02-useMemo传入子组件引用类型'
import RefHookDemo01 from './08-useRef的使用/01-useRef引用DOM'
import RefHookDemo02 from './08-useRef的使用/02-useRef引用其他数据'
import RefHookDemo03 from './08-useRef的使用/03-useRef引用其他数据的应用-记录上一次的值'
import ForwordRefDemo from './09-useImperativeHandle的使用/01-回顾forwordRef的用法'
import UseImperativeHookDemo from './09-useImperativeHandle的使用/02-useImperative的用法'
import UseEffectDemo from './10-useLayoutEffect的使用/01-useEffect的count修改'
import UseLayoutEffectDemo from './10-useLayoutEffect的使用/02-useLayoutEffect的count修改'
import CustomLifeHookDemo01 from './11-自定义Hook的使用/01-认识自定义Hook'
import CustomcontextShareHook from './11-自定义Hook的使用/02-自定义hook练习-context共享'
import CustromScrollPositionHook from './11-自定义Hook的使用/03-自定义hook练习-获取滚动位置'
import CustromDataStoreHook from './11-自定义Hook的使用/04-自定义hook练习-localstore存储'

export const ThemeContext = createContext();

export const UserContext = createContext();
export const TokenContext = createContext();

export default function App() {
    const [state, setState] = useState(true)
    const [show, setshow] = useState(true)
    return (
        <div>
            {/* 01-体验Hook */}
            {/* <ClassRouter />
            <hr />
            <ClassHook />
            <hr />
            <ClassHook2 />
            <hr />
            <ClassHook3 /> */}
            <hr />


            {/* 02-useState的使用 */}
            {/* <MutiState />
            <hr />
            <ComplexState />
            <hr/> */}


            {/* 03-useEffect的使用 */}
            {/* <ChangeTitleByClass/> */}
            {/* <hr/> */}
            {/* <ChangeTitleByHook/> */}
            {/* <hr/> */}
            {/* {state && <SubscribeToCancle/>} */}
            {/* <hr/> */}
            {/* <MutiUseEffect/> */}
            {/* <h2>App中</h2>
            <button onClick={e => { setState(!state) }}>change</button> */}


            {/* 04-useContext的使用 */}
            {/* <UserContext.Provider value={{ name: "why", age: 18 }}>
                <ThemeContext.Provider value={{ fontSize: "30px", color: "red" }}>
                    <ContextHookDemo />
                </ThemeContext.Provider>
            </UserContext.Provider> */}


            {/* 05-useReducer 的使用 */}
            {/* <UseReducerHome />
            <UseReducerAbout /> */}

            {/* 06-useCallback 的使用 */}
            {/* <CallbackHookDemo01/> */}
            {/* <CallbackHookDemo02/> */}

            {/* 07-useMemo的使用 */}
            <MemoHookDemo01 />
            {/* <MemoHookDemo2 /> */}

            {/* 08-useRef的使用 */}
            {/* <RefHookDemo01 /> */}
            {/* <RefHookDemo02 /> */}
            {/* <RefHookDemo03/> */}

            {/* 09-forwodRef的使用 */}
            {/* <ForwordRefDemo /> */}
            {/* <UseImperativeHookDemo /> */}

            {/* 10-useLayoutEffect的使用 */}
            {/* <UseEffectDemo /> */}
            {/* <UseLayoutEffectDemo /> */}

            {/* 11-自定义Hook的使用 */}
            {/* {show && <CustomLifeHookDemo01 />}
            <button onClick={e => {setshow(!show)}}>创建/销毁</button> */}

            {/* <UserContext.Provider value={{ name: 'Ding', age: 18 }}>
                <TokenContext.Provider value={{token: 'sadkja'}}>
                    <CustomcontextShareHook />
                </TokenContext.Provider>
            </UserContext.Provider> */}

            {/* <CustromScrollPositionHook /> */}
            {/* <CustromDataStoreHook /> */}
        </div>
    )
}
