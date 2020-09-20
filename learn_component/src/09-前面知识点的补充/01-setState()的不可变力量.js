import React, {PureComponent } from 'react';

class App extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            friends: [
                { name: 'Andy', age: 18 },
                { name: 'Red', age: 28 },
                { name: 'Lucy', age: 38 }
            ]
        }
    }
    render() {
        return (
            <div>
                <h2>朋友列表:</h2>
                <ul>
                    {this.state.friends.map((item) => {
                        return (
                            <li key={item.name}>{item.name}</li>
                        )
                    })}
                </ul>
                <button onClick={e => { this.inserchFriend() }}>添加数据</button>
            </div>
        );
    }
    // shouldComponentUpdate(prevProps, prevstate) {
    //     if (prevstate.friends !== this.state.friends) {
    //         return true
    //     }
    //     return false
    // }
    inserchFriend() {
        // *在shouldComponentUpdate中 两个变量只会做浅层次的比较,所以下面的浅拷贝也是可以的
        const newFriends = [...this.state.friends]
        newFriends.push({ name: 'Stephen', age: 30});
        this.setState({
            friends: newFriends
        })
    }
}

export default App;