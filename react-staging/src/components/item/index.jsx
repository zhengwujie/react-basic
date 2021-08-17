import React, {Component} from 'react';
import './index.css'
import PropTypes from 'prop-types'

export default class Item extends Component {
    static propTypes = {
        changeTodo: PropTypes.func.isRequired
    }
    state = {
        mouse: false
    }
    handleMouse = (flag) => {
        return () => {
            this.setState({mouse: flag})
        }
    }

    changeTodo = (id) => {
        return (event) => {
            console.log('item')
            this.props.changeTodo(id, event.target.checked)
        }
    }

    delTodo = (id) => {
        return () => {
            this.props.delTodo(id)
        }
    }

    render() {
        const {id, name, done} = this.props
        const {mouse} = this.state
        return (
            <li
                onMouseLeave={this.handleMouse(false)}
                onMouseEnter={this.handleMouse(true)}
                style={{backgroundColor: mouse ? '#ddd' : 'white'}}>
                <label>
                    <input type="checkbox" defaultChecked={done} onChange={this.changeTodo(id)}/>
                    <span>{name}</span>
                </label>
                <button className="btn btn-danger" style={{display: mouse ? 'block' : 'none'}}
                        onClick={this.delTodo(id)}>删除
                </button>
            </li>
        );
    }
}

