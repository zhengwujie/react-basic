import React, {Component} from 'react';
import './index.css'

export default class Footer extends Component {
    clearALLTodos = () => {
        this.props.clearALLTodos()
    }
    chooseAllDone = (e) => {
        this.props.chooseAllDone(e.target.checked)
    }

    render() {
        const {todos} = this.props
        //总数
        const total = todos.length
        //已选
        let doneCount = todos.reduce((pre, cur) => {
            return pre + (cur.done ? 1 : 0)
        }, 0)

        // const doneArr = todos.filter(item => {
        //     return item.done === true
        // })
        // if (doneArr && doneArr.length > 0) {
        //     doneCount = doneArr.length
        // }
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" checked={(doneCount === total) && total !== 0 ? true : false} onChange={this.chooseAllDone}/>
                </label>
                <span>
                    <span>已完成{doneCount}</span> / 全部{total}
                </span>
                <button className="btn btn-danger" onClick={this.clearALLTodos}>清除已完成任务</button>
            </div>
        );
    }
}

