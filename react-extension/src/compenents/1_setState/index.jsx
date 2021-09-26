import React, {Component} from 'react';

class Demo extends Component {
    state = {
        count: 0
    }
    add = () => {
        //对象式setState
        // this.setState({count: this.state.count + 1})
        // 函数式setState
        this.setState(state => ({count: state.count + 1}), () => {
            console.log('count', this.state.count)
        })
    }

    render() {
        return (
            <div>
                <h2>当前求和为{this.state.count}</h2>
                <button onClick={this.add}>点我+1</button>
            </div>
        );
    }
}

export default Demo;
