import * as type from '../type'

const initState = {
    movie: []
}
export const postReducer = (state = initState, action) => {
    switch(action.type){
        case type.GET_POSTS:
        return{
            ...state,
            movie: action
        }
        default:
            return state
    }
}