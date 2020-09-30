import React, { useState, useEffect } from 'react'

import useLocalStorage from '../hooks/loacl-storage-hook'
export default function CustromDataStoreHook() {
    const [name, setname] = useLocalStorage('name')
    const [age, setage] = useLocalStorage('age')
    return (
        <div>
            <h2>显示名字:{name}</h2>
            <button onClick={e => { setname('Ding') }}>设置内容</button>
            <h2>显示年龄:{age}</h2>
            <button onClick={e => { setage('18') }}>设置内容</button>
        </div>
    )
}
