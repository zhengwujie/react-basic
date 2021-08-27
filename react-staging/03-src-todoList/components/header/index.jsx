import React, {Component} from 'react';
import './index.css'
import {nanoid} from "nanoid";

export default class Header extends Component {
    addTodo = (event) => {
        const {target, keyCode} = event
        if (keyCode !== 13) return
        if(!target.value){
            alert('名称不能为空！')
            return
        }
        this.props.addTodo({
            id: nanoid(),
            name: target.value,
            done: false
        })
        target.value = ''
    }

    render() {
        return (
            <div className="todo-header">
                <input type="text" onKeyUp={this.addTodo} placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        );
    }
}

