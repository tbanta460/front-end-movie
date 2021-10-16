import * as types from '../type'
export const fetchpost = () => async dispatch => {
    const res = await fetch('http://localhost:3010/movie').then(res => res.json()).then(res => res)
    dispatch({
        type:types.GET_POSTS,


    })
}