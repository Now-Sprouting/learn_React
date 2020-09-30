import React, { useEffect } from 'react'


const Home = (props) => {
    useLoggingLife('Home')
    return <h2>Home</h2>
}
const About = (props) => {
    useLoggingLife('About')
    return <h2>About</h2>
}

export default function CustomLifeHookDemo01() {
    useLoggingLife('CustomLifeHookDemo01')
    return (
        <div>
            <h2>CustomLifeHookDemo01</h2>
            <Home />
            <About />
        </div>
    )
}

function useLoggingLife(name) {
    useEffect(() => {
        console.log(`${name}组件被创建出来了`);
        return () => {
            console.log(`${name}组件被销毁了`);
        }
    }, [])
}
