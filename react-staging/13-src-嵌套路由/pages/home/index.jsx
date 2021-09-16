import React, {Component} from 'react';
import News from './news'
import Message from './message'
import MyNavLink from "../../components/MyNavLink";
import {Redirect, Route, Switch} from "react-router-dom";


class Index extends Component {
    render() {
        return (
            <div>
                <h1>homes</h1>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            {/*<a className="list-group-item active" href="./home-news.html">News</a>*/}
                            <MyNavLink to="/home/news">News</MyNavLink>
                        </li>
                        <li>
                            {/*<a className="list-group-item " href="./home-message.html">Message</a>*/}
                            <MyNavLink to="/home/message">Message</MyNavLink>
                        </li>

                    </ul>
                    <Switch>
                        <Route path="/home/news" component={News}/>
                        <Route path="/home/message" component={Message}/>
                        <Redirect to="/home/news" />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Index;
