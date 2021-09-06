import React, {Component} from 'react';
import './index.css'
import Item from '../item'
class List extends Component {

    render() {
        const {list}  = this.props
        console.log(this.props)
        return (
            <div className="row">
                {
                    list.map( (item,index) => {
                        return (
                            <Item key={index} {...item}/>
                        )
                    })
                }
            </div>
        );
    }
}

export default List;
