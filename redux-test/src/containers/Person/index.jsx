//引入action
import {
    createIncrementAction,
} from '../../redux/Person/count'

//引入connect用于连接UI组件与redux
import {connect} from 'react-redux'


import React, {Component} from 'react';

class Count extends Component {
    state
    add = () => {
        const name = this.name.value
        const age = this.age.value
        console.log(name,age)
    }

    render() {
        return (
            <div>
                <h1>我是Person组件</h1>
                <input ref={c => this.name = c} type="text" placeholder="输入名字"/>
                <input ref={c => this.age = c} type="text" placeholder="输入年龄"/>
                <button onClick={this.add}>添加</button>
                <ul>
                    <li>名字---年龄</li>
                </ul>
            </div>
        );
    }
}


//使用connect()()创建并暴露一个Count的容器组件
export default connect(state => ({count: state}), {
    jia: createIncrementAction,
})(Count)

