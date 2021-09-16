import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import about from './pages/about'
import home from './pages/home'
import MyNavLink from './components/MyNavLink'
import Header from './components/header'
class App extends Component {

    render() {
        return (
            <div>
                <Header/>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
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
                                    <Redirect to="/about" />
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
