import React, { PureComponent } from 'react'
import { Input, Button } from 'antd';
const { TextArea } = Input;
export default class CommentInput extends PureComponent {
    render() {
        return (
            <div>
                <TextArea rows={4}/>
                <Button type="primary">Primary Button</Button>
            </div>
        )
    }
}
