import React, {Component} from 'react';
// import qs from 'querystring'
const messageData = [
    {
        id: '01',
        content: '你好中国1'
    },
    {
        id: '02',
        content: '你好中国2'
    },
    {
        id: '03',
        content: '你好中国3'
    }
]
export default class Detail extends Component {


    render() {
        // params 接收参数
        // const {id, title} = this.props.match.params
        // search 接收参数
        // const search = this.props.location.search.replace('?','')
        // const {id,title} = qs.parse(search)
        // state 接收参数
        const {id, title} = this.props.location.state
        let messageObj = messageData.find(item => item.id === id)
        // console.log('messageObj',messageObj)
        return (
            <div>
                <ul>
                    <li>id:{id}</li>
                    <li>title:{title}</li>
                    <li>content:{messageObj.content}</li>
                </ul>
            </div>
        );
    }
}
