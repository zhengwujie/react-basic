import React, {Component} from 'react';
// import axios from "axios";
import PubSub from 'pubsub-js'

class Search extends Component {
    searchFn = async () => {
        const {keyWordElement: {value: keyWord}} = this
        PubSub.publish('newSend', {isFirst: false, isLoading: true})
        //#region
        //使用axios发送请求
        // axios.get(`/api1/search/users?q=${keyWord}`).then(res => {
        //     const {items: list} = res.data
        //     PubSub.publish('newSend', {isLoading: false, list})
        // }).catch(err => {
        //     PubSub.publish('newSend', {isLoading: false, err: err.messages})
        // })
        //endregin

        //使用fetch发送请求
        // fetch(`/api1/search/users?q=${keyWord}`).then(res => {
        //     return res.json()
        // }).then(res => {
        //     console.log('res', res)
        //     const {items: list} = res
        //     PubSub.publish('newSend', {isLoading: false, list})
        // }).catch(err => {
        //     console.log('err', err)
        //     PubSub.publish('newSend', {isLoading: false, err: err.messages})
        // })

        try {

            const res = await fetch(`/api1/search/users?q=${keyWord}`)
            const data = await res.json()
            const {items: list} = data
            PubSub.publish('newSend', {isLoading: false, list})
            console.log('data', data)
        } catch (err) {
            PubSub.publish('newSend', {isLoading: false, err: err})
            console.log('err', err)
        }


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
