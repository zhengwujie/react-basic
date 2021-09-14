import React,{Component} from 'react'
import hello from './hello.module.css'
export default class Hello extends Component{
    render() {
        return (
            <h2 className={hello.title}>hello react!!</h2>
        )
    }
}

