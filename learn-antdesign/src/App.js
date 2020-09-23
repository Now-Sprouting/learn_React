import React, { PureComponent } from 'react'
import CommentInput from './comment/commentInput'
import CommentItem from './comment/commentItem'
export default class App extends PureComponent {
    render() {
        return (
            <div>
                <CommentItem/>
                <CommentInput/>
            </div>
        )
    }
}
