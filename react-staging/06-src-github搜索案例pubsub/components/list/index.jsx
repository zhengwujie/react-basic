import React, {Component} from 'react';
import './index.css'
import Item from '../item'
import PubSub from 'pubsub-js'

class List extends Component {
    state = {
        list: [], //user初始数据
        isFirst: true,  //第一次进入页面
        isLoading: false,  //正在加载中
        err: ''  //错误提示
    }

    componentDidMount() {
      this.token =  PubSub.subscribe('newSend', (_, data) => {
            this.setState(data)
        })
    }

    componentWillUnmount() {
        PubSub.unsubscribe(this.token)
    }

    render() {
        const {list, isFirst, isLoading, err} = this.state
        return (
            <div className="row">
                {
                    isFirst ? <h2>欢迎使用，输入关键字，点击搜索</h2> :
                        isLoading ? <h2>Loading......</h2> :
                            err ? <h2 style={{color: "red"}}>err</h2> :
                                list.map(item => {
                                    return (
                                        <Item key={item.id} {...item}/>
                                    )
                                })
                }
            </div>
        );
    }
}

export default List;
