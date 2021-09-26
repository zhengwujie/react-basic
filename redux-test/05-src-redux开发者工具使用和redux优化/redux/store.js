/*
	该文件专门用于暴露一个store对象，整个应用只有一个store对象
*/

//引入createStore，专门用于创建redux中最为核心的store对象
import {createStore, applyMiddleware, combineReducers} from 'redux'
//引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'

import {composeWithDevTools} from 'redux-devtools-extension'

//引入为Count组件服务的reducer
import countReducer from './reducer/count'
//引入为person组件服务的reducer
import personReducer from './reducer/person'

// 所有reducer组合
const allReducer = combineReducers({
    he: countReducer, rens: personReducer
})
//暴露store

export default createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))
