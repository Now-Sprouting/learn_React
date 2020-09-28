import React, { useState } from 'react'

export default function ComplexState() {
    const [friend, setfriend] = useState(['Curry', 'Kely'])
    const [students, setstudents] = useState([
        { id: 1, name: 'zhangsan', age: 18 },
        { id: 2, name: 'lisi', age: 19 },
        { id: 3, name: 'hanmeimei', age: 20 }
    ])

    function incAgeWithId(index) {
        let newStudents = [...students];
        newStudents[index].age += 1
       setstudents(newStudents)

    }
    return (
        <div>
            <h2>朋友列表:</h2>
            <ul>
                {friend.map((el, index) => {
                    return <li key={index}>{el}</li>
                })}
            </ul>
            <button onClick={e => { setfriend([...friend, 'Green']) }}>添加朋友</button>
            <h2>学生列表:</h2>
            <div>
                {students.map((el, index) => {
                    return (
                        <div key={el.id}>
                            <span style={{ marginRight: '10px' }}>{el.name}</span>
                            <span>{el.age}</span>
                            <button onClick={e => { incAgeWithId(index) }}>年龄+1</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
