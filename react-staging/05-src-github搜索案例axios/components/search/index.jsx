import React, {Component} from 'react';

class Search extends Component {
    searchFn = () => {
        const {keyWordElement: {value: keyWord}} = this
        this.props.searchFn(keyWord)
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
