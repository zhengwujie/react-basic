import React, {Component} from 'react';
import Detail from "./detail";
import {Link, Switch, Route} from "react-router-dom";

class Index extends Component {
    state = {
        list: [
            {id: '01', title: '消息01'},
            {id: '02', title: '消息02'},
            {id: '03', title: '消息03'}
        ]
    }
    pushJump = (id, title) => {
        // params 参数传递
        // this.props.history.push(`/home/message/detail/${id}/${title}`)

        // search 参数传递
        // this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)

        // state 参数传递
        this.props.history.push(`/home/message/detail`, {id, title})
    }
    replaceJump = (id, title) => {
        // params 参数传递
        // this.props.history.replace(`/home/message/detail/${id}/${title}`)

        // search 参数传递
        // this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)

        // state 参数传递
        this.props.history.replace(`/home/message/detail`, {id, title})
    }
    back = () => {
        this.props.history.goBack()
    }
    forWard = () => {
        this.props.history.goForward()
    }

    render() {
        const {list} = this.state
        return (
            <div>
                <ul>
                    {
                        list.map(item => {
                            return (
                                <li key={item.id}>
                                    {/*向路由组件传递params参数*/}
                                    {/*<Link className="list-group-item"  to={`/home/message/detail/${item.id}/${item.title}`}>{item.title}</Link>*/}

                                    {/*向路由组件传递search参数*/}
                                    {/*<Link  to={`/home/message/detail?id=${item.id}&title=${item.title}`}>{item.title}</Link>*/}

                                    {/*向路由组件传递state参数*/}
                                    <Link to={{
                                        pathname: '/home/message/detail',
                                        state: {id: item.id, title: item.title}
                                    }}>{item.title}</Link>
                                    &nbsp;
                                    <button onClick={() => this.pushJump(item.id, item.title)}>push</button>
                                    &nbsp;
                                    <button onClick={() => this.replaceJump(item.id, item.title)}>replace</button>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr/>
                <Switch>
                    {/*声明接收params参数*/}
                    {/*<Route path={`/home/message/detail/:id/:title`} component={Detail}/>*/}

                    {/*search和state参数无需声明接收，正常注册路由即可*/}
                    <Route path="/home/message/detail" component={Detail}/>

                </Switch>
                <button onClick={this.back}>回退</button>
                &nbsp;
                <button onClick={this.forWard}>前进</button>
            </div>
        );
    }
}

export default Index;
