import React, { Component } from 'react';
import PropTypes from 'prop-types'

class TabControl extends Component {
    constructor() {
        super()
        this.state = {
            currentI: 0
        }
    }
    render() {
        const { names } = this.props;
        const {currentI} = this.state;
        return (
            <div className="tab-control">
                {names.map((item, index) => {
                    return (
                        <div 
                        key={index} 
                        className={'tab-item ' + (index === currentI ? 'current-tab' : '')}
                        onClick={(e) => {this.changeCurrent(e, index)}}>
                            {item}
                        </div>
                    )
                })}
            </div>
        );
    }
    changeCurrent(e, index) {
        // console.log(e);
        this.setState({
            currentI : index
        })
        const {itemClick} = this.props;
        itemClick(index);
    }
}
TabControl.propTypes = {
    names: PropTypes.array.isRequired
}
export default TabControl;