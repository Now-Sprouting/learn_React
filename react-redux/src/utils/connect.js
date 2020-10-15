import React, { PureComponent } from "react";
import { StoreContext } from './context';

export function connect(mapStateToProps, mapDispachToProps) {
    return function enhanceHOC(WrappedComponent) {
         class  EnhanceComponent extends PureComponent {
            constructor(props, context) {
                super(props, context)
                this.state = {
                    storeState: mapStateToProps(context.getState())
                }
            }
            // *如果不写这些生命周期的话别的组件数据发生改变,自己组件监听不到数据的改变
            componentDidMount() {
                this.unsubscribe = this.context.subscribe(() => {
                    this.setState({
                        storeState: mapStateToProps(this.context.getState())
                    })
                })
            }
            componentWillUnmount() {
                this.unsubscribe()
            }
            render() {
                return <WrappedComponent {...this.props}
                    {...mapStateToProps(this.context.getState())}
                    {...mapDispachToProps(this.context.dispatch)} />
            }
        }
        EnhanceComponent.contextType = StoreContext;
        return EnhanceComponent;
    }
}