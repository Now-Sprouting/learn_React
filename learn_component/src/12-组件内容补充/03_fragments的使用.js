import React, { PureComponent, Fragment } from 'react';

// *Fragment作用同Vue中的template 
// *可以使用短语发形式<></>  注意:短语发形式中不能添加属性 如 key name等
export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      friends: [
        {name: "why", age: 18},
        {name: "lilei", age: 20},
        {name: "kobe", age: 25},
      ]
    }
  }

  render() {
    return (
      <>
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={e => this.increment()}>+1</button>
        <div>
          {
            this.state.friends.map((item, index) => {
              return (
                <Fragment key={item.name}>
                  <div>{item.name}</div>
                  <p>{item.age}</p>
                  <hr/>
                </Fragment>
              )
            })
          }
        </div>
      </>
    )
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
}