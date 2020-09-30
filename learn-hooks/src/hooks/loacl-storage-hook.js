import {useEffect, useState} from 'react'


export default function(key) {
    const [name, setkey] = useState(() => {
        const name = JSON.parse(window.localStorage.getItem(key))
        return name
    })
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(name))
    }, [name])
    return [name, setkey]
}