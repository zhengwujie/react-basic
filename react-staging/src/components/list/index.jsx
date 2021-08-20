import React, {Component} from 'react';
import Item from "../item";
import './index.css'
import PropTypes from "prop-types";

export default class List extends Component {
    static propTypes = {
        changeTodo: PropTypes.func.isRequired,
        todos:PropTypes.array.isRequired,
        delTodo:PropTypes.func.isRequired
    }
    render() {
        const {todos,changeTodo,delTodo} = this.props
        return (
            <ul className="todo-main">
                {
                    todos.map((item) => {
                        return (
                            <Item key={item.id} {...item} changeTodo={changeTodo} delTodo={delTodo}/>
                        )
                    })
                }
            </ul>
        );
    }
}

