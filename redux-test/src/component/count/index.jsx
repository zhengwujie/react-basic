import React, {Component} from 'react';

class Count extends Component {
    state = {
        count: 0
    }
    increment = () => {
        // 加
        let {value} = this.selectNumber
        const {count} = this.state
        this.setState({count: count + value * 1})
    }
    decrement = () => {
        // 减
        let {value} = this.selectNumber
        const {count} = this.state
        value = Number(value)
        this.setState({count: count - value})
    }
    incrementIfOdd = () => {
        // 当前求和为奇数在加
        let {value} = this.selectNumber
        const {count} = this.state
        value = Number(value)
        count % 2 !== 0 && this.setState({count: count + value})
    }
    incrementAsync = () => {
        // 异步加
        setTimeout(() => {
            this.increment()
        }, 500)
    }

    render() {
        return (
            <div>
                <h1>当前求个为：{this.state.count}</h1>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.incrementIfOdd}>当前求和为奇数在加</button>
                <button onClick={this.incrementAsync}>异步加</button>
            </div>
        );
    }
}

export default Count;
