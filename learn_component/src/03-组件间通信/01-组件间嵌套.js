import React from 'react';

function Header() {
    return (
        <h2>Header</h2>
    )
}
function Banner() {
    return (
        <h3>Banner</h3>
    )
}
function ProductList() {
    return (
        <h3>ProductList</h3>
    )
}
function Main() {
    return (
        <div>
            <Banner/>
            <ProductList/>
        </div>
    )
}

function Footer() {
    return (
        <h2>Footer</h2>
    )
}
export default function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}
