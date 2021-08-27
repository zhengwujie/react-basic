import React, {Component} from 'react'
import './app.css'
import Header from "./components/header";
import Footer from "./components/footer";
import List from "./components/list";

export default class App extends Component {
    state = {
        todos: [
            {id: '001', name: '吃饭', done: true},
            {id: '002', name: '睡觉', done: true},
            {id: '003', name: '打代码', done: false},
        ]
    }
    // 添加todo
    addTodo = (todoObj) => {
        const {todos} = this.state
        this.setState({
            todos: [todoObj, ...todos]
        })
    }
    // 更新狀態
    changeTodo = (id, done) => {
        console.log('app')
        const {todos} = this.state
        const newTodos = todos.map((todoObj) => {
            if (todoObj.id === id) {
                // 修改done值
                return {...todoObj, done}
            } else {
                return todoObj
            }
        })
        this.setState({
            todos: newTodos
        })
    }

    // 刪除一條todos
    delTodo = (id) => {
        const {todos} = this.state
        // const index = todos.findIndex((todoObj) => {
        //     return todoObj.id === id
        // })
        // todos.splice(index, 1)
        // this.setState({todos})

        const newTodo = todos.filter(item => {
            return item.id !== id
        })
        this.setState({todos: newTodo})
    }

    // 清除所有todo已完成状态
    clearALLTodos = () => {
        const {todos} = this.state
        const newTodos = todos.filter((todoObj) => {
            return !todoObj.done
        })
        this.setState({todos: newTodos})
    }

    //----------------

    // 全选
    chooseAllDone = (done) => {
        const {todos} = this.state
        const newTodos = todos.map(item => {
            return {...item, done}
        })
        console.log('newTodos', newTodos)
        this.setState({todos: newTodos})
    }

    render() {
        const {todos} = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List todos={todos} changeTodo={this.changeTodo} delTodo={this.delTodo}/>
                    <Footer todos={todos} clearALLTodos={this.clearALLTodos} chooseAllDone={this.chooseAllDone}/>
                </div>
            </div>
        )
    }
}
