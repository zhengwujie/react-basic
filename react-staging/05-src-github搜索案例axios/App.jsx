import React, {Component} from 'react';
import List from './components/list/index'
import Search from './components/search/index'
import axios from "axios";

class App extends Component {
    state = {
        list: [], //user初始数据
        isFirst: true,  //第一次进入页面
        isLoading: false,  //正在加载中
        err: ''  //错误提示
    }
    searchFn = (v) => {
        const that = this
        that.setState({isFirst: false, isLoading: true})
        axios.get(`/api1/search/users?q=${v}`).then(res => {
            const {items: list} = res.data
            that.setState({isLoading: false,list})
        }).catch(err => {
            that.setState({isLoading: false,err:err.messages})
            console.log(err)
        })
    }

    render() {
        return (
            <div className="container">
                <Search searchFn={this.searchFn}/>
                <List {...this.state}/>
            </div>
        );
    }
}

export default App;
