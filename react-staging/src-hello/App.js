import React,{Component} from 'react'
import Hello from "./components/hello/hello.jsx";
import Welcome from "./components/welcome/welcome.jsx";
// 创建外壳组件
export default class App extends Component{
    render() {
        return(
            <div>
                <Hello/>
                <Welcome/>
            </div>
        )
    }
}

