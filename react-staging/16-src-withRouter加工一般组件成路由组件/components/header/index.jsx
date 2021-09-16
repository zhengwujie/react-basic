import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
class Header extends Component {
    back = () => {
        this.props.history.goBack()
    }
    forWard = () => {
        this.props.history.goForward()
    }
    render() {
        return (
            <div className="row">
                <div className="col-xs-offset-2 col-xs-8">
                    <div className="page-header">
                        <h2>React Router Demo</h2>
                        <button onClick={this.back}>回退</button>
                        &nbsp;
                        <button onClick={this.forWard}>前进</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Header);
//withRouter 加工一般组件，让一遍组件具路由组件所特有api
