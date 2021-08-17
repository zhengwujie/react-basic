import React,{Component} from 'react'
import welcome from './welcome.module.css'
export default class Welcome extends Component{
    render() {
        return(
            <h2 className={welcome.title}>weclome</h2>
        )
    }
}
