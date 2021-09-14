import React, {Component} from 'react';
import axios from "axios";
import PubSub from 'pubsub-js'
class Search extends Component {
    searchFn = () => {
        const {keyWordElement: {value: keyWord}} = this
        PubSub.publish('newSend', {isFirst: false, isLoading: true})
        axios.get(`/api1/search/users?q=${keyWord}`).then(res => {
            const {items: list} = res.data
            PubSub.publish('newSend', {isLoading: false, list})
        }).catch(err => {
            PubSub.publish('newSend', {isLoading: false, err: err.messages})
        })
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={c => this.keyWordElement = c} type="text"
                           placeholder="enter the name you search"/>&nbsp;
                    <button onClick={this.searchFn}>Search</button>
                </div>
            </section>
        );
    }
}

export default Search;
