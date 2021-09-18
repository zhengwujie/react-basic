import React, {Component} from 'react';
import store from '../../redux/store'

class Count extends Component {
    componentDidMount() {
        store.subscribe(() => {
            this.setState({})
        })
    }

    state = {
        name: '小明'
    }
    increment = () => {
        // 加
        let {value} = this.selectNumber
        store.dispatch({type: 'increment', data: value * 1})
    }
    decrement = () => {
        // 减
        let {value} = this.selectNumber
        store.dispatch({type: 'decrement', data: value * 1})
    }
    incrementIfOdd = () => {
        // 当前求和为奇数在加
        let {value} = this.selectNumber
        const count = store.getState()
        count % 2 !== 0 && store.dispatch({type: 'increment', data: value * 1})
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
                <h1>当前求个为：{store.getState()}</h1>
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
