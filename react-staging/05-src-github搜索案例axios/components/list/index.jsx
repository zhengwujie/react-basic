import React, {Component} from 'react';
import './index.css'
import Item from '../item'

class List extends Component {

    render() {
        const {list, isFirst, isLoading, err} = this.props
        console.log('props', this.props)
        return (
            <div className="row">
                {
                    isFirst ? <h2>欢迎使用，输入关键字，点击搜索</h2> :
                        isLoading ? <h2>Loading......</h2> :
                            err ? <h2 style={{color: 'red'}}></h2> :
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
