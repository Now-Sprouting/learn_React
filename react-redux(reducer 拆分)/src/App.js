import React, { PureComponent } from 'react'
// *无untils版本
// import Home from './components/Home.js'
// import About from './components/About.js'

// *含untils版本(自己手写)
// import About2 from './components/About2'
// import Home2 from './components/Home2'

// *引入react-redux版本
// import About3 from './components/About3'
// import Home3 from './components/Home3'

// *引入react-redux版本(异步请求)
// import About4 from './components/About4'
// import Home4 from './components/Home4'

// *引入react-redux版本(异步请求) (thunk中间件)
// import About5 from './components/About5'
// import Home5 from './components/Home5'

// *引入react-redux版本(异步请求) (saga中间件)
import About6 from './components/About6'
import Home6 from './components/Home6'
export default class App extends PureComponent {
    render() {
        return (
            <div>
                {/* <Home/>
                <About/> */}


                {/* <About2 />
                <Home2 /> */}

                {/* <About3 />
                <Home3 /> */}

                {/* <About4 />
                <Home4 /> */}

                {/* <About5 />
                <Home5 /> */}

                <About6 />
                <Home6 />
            </div>
        )
    }
}
