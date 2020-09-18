import React from 'react'
// 一.类组件
// export default class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             message: '我是类组件'
//         }
//     }
//     render() {
//         return (
//             <h2>{this.state.message}</h2>
//         )
//     }
// }


// 二.函数式组件
// 函数式组件的特点:
// 1.没有this
// 2.没有生命周期
// 3.没有内部状态管理(因为每个函数内声明的变量都有自己的作用域,重新进入时会重新声明)
// 后面增加的hooks,增加了函数式组件的内部状态管理
export default function App() {
    return (
        <h2>我是函数式组件</h2>
    )
}


// 三.render函数的合法返回值
// 1.React元素
// 2.数组或者fragments
// 3.Portals
// 4.字符串或数值类型
// 5.布尔类型或null
