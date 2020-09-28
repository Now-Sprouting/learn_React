import React, { useState } from 'react'

export default function MutiState() {
    const [count, setCount] = useState(0)
    const [age, setAge] = useState(18)
    return (
        <div>
            <h2>当前计数:{count}</h2>
            <h2>年龄:{age}</h2>
        </div>
    )
}
