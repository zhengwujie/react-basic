import React, {Component} from 'react';

import Demo from './compenents/1_setState/index'
import LazyLoad from './compenents/2_lazyLoad'
class App extends Component {
    render() {
        return (
            <div>
                <Demo/>
                -------------------------------
                <LazyLoad/>
            </div>
        );
    }
}

export default App;
