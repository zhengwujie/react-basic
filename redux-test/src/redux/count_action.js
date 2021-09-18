import {INCREMENT, DECREMENT} from './constant'

// 同步action，就是指action的值为object类型的一把对象
export const createIncrementAction = data => ({type: INCREMENT, data: data})
export const createDecrementAction = data => ({type: DECREMENT, data: data})

//异步action,就是指action的值为函数
export const createIncrementAsyncAction = (data, time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createIncrementAction(data))
        }, time)
    }
}
