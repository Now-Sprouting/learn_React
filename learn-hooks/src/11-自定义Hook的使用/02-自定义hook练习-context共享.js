import React, {useContext} from 'react'
// *无自定义hook写法
// import {UserContext} from '../App'
// import {TokenContext} from '../App'
// *自定义hook后
import UsersContext from '../hooks/user-hook'
export default function CustomcontextShareHook() {
    // *无自定义hook写法
    // const user = useContext(UserContext)
    // const token = useContext(TokenContext)

    // *自定义hook后
    const [user, token] = UsersContext(); 
    console.log(user, token);
    return (
        <div>
            CustomcontextShareHook
        </div>
    )
}
