import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';

// *有些时候,我么希望渲染的内容独立于父组件,甚至独立于当前挂载到的DOM元素上面,这时候就可以使用Protal方法
class Modal extends PureComponent {
  render() {
    return ReactDOM.createPortal(
      this.props.children,
      document.getElementById("modal")
    )
  }
}

class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <Modal>
          <h2>Title</h2>
        </Modal>
      </div>
    )
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home/>
      </div>
    )
  }
}
