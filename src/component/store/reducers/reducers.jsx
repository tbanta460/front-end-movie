
const fetchData = async () => await fetch('http://localhost:3010/movie').then(res => res.json()).then(res => res);
const initState = {
    movie: 0
}

export const myReducers = (state = {initState}, action) => {
    console.log(action.type)
    if(action.type === 'FETCHDATA'){
        return{
            ...state,
            movie: state.movie + 1
        }
    }
    return state
    // switch(action.type){
    //     case "FETCHDATA":
    //         return {
    //             ...state, movie: state.movie + 1
    //         }
    //     default:
    //         return state;
    // }
}