import {useEffect, useState} from 'react'

export default function () {
    const [num, setnum] = useState(0)
    const windowScroll = () => {
        setnum(window.scrollY)
    }
    useEffect(() => {
        window.addEventListener('scroll', windowScroll)
        return () => {
            window.removeEventListener('scroll', windowScroll)
        }
    }, [])
    return num
}