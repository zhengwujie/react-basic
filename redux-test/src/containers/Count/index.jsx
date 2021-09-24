//引入action
import {
    createIncrementAction,
} from '../../redux/action/count'

//引入connect用于连接UI组件与redux
import {connect} from 'react-redux'


import React, {Component} from 'react';

class Count extends Component {
    add = () => {
        this.props.jia(1)
    }

    render() {
        return (
            <div>
                <h1>我是Count组件</h1>
                <h2>Count:{this.props.count}</h2>
                <button onClick={this.add}>点击+1</button>
            </div>
        );
    }
}


//使用connect()()创建并暴露一个Count的容器组件
export default connect(state => ({count: state}), {
    jia: createIncrementAction,
})(Count)

