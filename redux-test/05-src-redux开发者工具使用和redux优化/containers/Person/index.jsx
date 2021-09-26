import {nanoid} from 'nanoid'

//引入connect用于连接UI组件与redux
import {connect} from 'react-redux'
import React, {Component} from 'react';

import {createPerson} from '../../redux/action/person'

class Person extends Component {
    state
    add = () => {
        const name = this.name.value
        const age = this.age.value
        const personObj = {id: nanoid(), name, age}
        this.props.jiayiren(personObj)
        console.log('props:', this.props)
        this.name.value = ''
        this.age.value = ''
    }

    render() {
        console.log('this.props', this.props)
        return (
            <div>
                <h1>我是Person组件,上方组件求和：{this.props.count}</h1>
                <input ref={c => this.name = c} type="text" placeholder="输入名字"/>
                <input ref={c => this.age = c} type="text" placeholder="输入年龄"/>
                <button onClick={this.add}>添加</button>
                <ul>
                    {this.props.yiduiren.map(item => {
                        return (
                            <li key={item.id}>{item.name}---{item.age}</li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}


//使用connect()()创建并暴露一个Count的容器组件
export default connect(
    state => ({yiduiren: state.rens,count:state.he}),
    {
        jiayiren: createPerson
    }
)(Person)

