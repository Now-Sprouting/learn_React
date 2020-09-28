import React, { useState, createContext } from 'react'
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

export const ThemeContext = createContext();
export const UserContext = createContext();

export default function App() {
    const [state, setState] = useState(true)
    return (
        <div>
            {/* 01-体验Hook */}
            {/* <ClassRouter />
            <hr />
            <ClassHook />
            <hr />
            <ClassHook2 />
            <hr />
            <ClassHook3 />
            <hr /> */}

            {/* 02-useState的使用 */}
            {/* <MutiState />
            <hr />
            <ComplexState />
            <hr/> */}

            {/* 03-useEffect的使用 */}
            {/* <ChangeTitleByClass/>
            <hr/>
            <ChangeTitleByHook/>
            <hr/>
            {state && <SubscribeToCancle/>}
            <hr/>
            <MutiUseEffect/>
             <h2>App中</h2>
            <button onClick={e => {setState(!state)}}>change</button> */}

            {/* useContext的使用 */}
            <UserContext.Provider value={{ name: "why", age: 18 }}>
                <ThemeContext.Provider value={{ fontSize: "30px", color: "red" }}>
                    <ContextHookDemo />
                </ThemeContext.Provider>
            </UserContext.Provider>

        </div>
    )
}
