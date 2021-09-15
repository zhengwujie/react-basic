import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import about from './pages/about'
import home from './pages/home'
import MyNavLink from './components/MyNavLink'

class App extends Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header"><h2>React Router Demo</h2></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/*<a className="list-group-item" href="./about.html">About</a>*/}
                            {/*<a className="list-group-item active" href="./home.html">Home</a>*/}
                            {/*<NavLink className="list-group-item" to="/about">About</NavLink>*/}
                            {/*<NavLink className="list-group-item" to="/home">Home</NavLink>*/}
                            <MyNavLink to="/about">About</MyNavLink>
                            <MyNavLink to="/home">Home</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Switch>
                                    <Route path="/about" component={about}/>
                                    <Route path="/home" component={home}/>
                                </Switch>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
