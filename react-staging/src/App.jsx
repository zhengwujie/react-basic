import React, {Component} from 'react';
import {Button, DatePicker, Space} from "antd";
import 'antd/dist/antd.css'
import {AppleOutlined} from '@ant-design/icons'

class App extends Component {
    onChange = (date, dateString) => {
        console.log(date, dateString);
    }

    render() {
        return (
            <div>
                app....
                <Button type="primary">Primary button</Button>
                <AppleOutlined/>
                <Space direction="vertical">
                    <DatePicker onChange={this.onChange}/>
                    <DatePicker onChange={this.onChange} picker="week"/>
                    <DatePicker onChange={this.onChange} picker="month"/>
                    <DatePicker onChange={this.onChange} picker="quarter"/>
                    <DatePicker onChange={this.onChange} picker="year"/>
                </Space>
            </div>
        );
    }
}

export default App;
