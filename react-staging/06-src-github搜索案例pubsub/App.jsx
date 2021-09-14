import React, {Component} from 'react';
import List from './components/list/index'
import Search from './components/search/index'
import axios from "axios";

class App extends Component {

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
                <Search/>
                <List/>
            </div>
        );
    }
}

export default App;
