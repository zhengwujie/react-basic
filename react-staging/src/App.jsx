import React, {Component} from 'react';
import List from './components/list/index'
import Search from './components/search/index'
import axios from "axios";

class App extends Component {
    state = {
        list: []
    }
    searchFn = (v) => {
        const that = this
        axios.get(`/api1/search/users2?q=${v}`).then(res => {
            const {items:list} = res.data
            that.setState({list})
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div className="container">
                <Search searchFn={this.searchFn}/>
                <List list={this.state.list}/>
            </div>
        );
    }
}

export default App;
