import React, {Component} from 'react';
import Count from './component/count'

class App extends Component {
    onChange = (date, dateString) => {
        console.log(date, dateString);
    }

    render() {
        return (
            <div>
                <Count/>
            </div>
        );
    }
}

export default App;
