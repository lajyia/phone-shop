const stateDefault ={
    basket: 0
}

const ADD_BASKET = "ADD_BASKET";
const GET_BASKET = "GET_BASKET";
const NULL_BASKET = "NULL_BASKET";

export const basketReducer = (state = stateDefault, action) =>{
    switch(action.type){
        case ADD_BASKET:
            return {...state, basket: state.basket + 1}
        case GET_BASKET:
            return {...state, basket: state.basket - 1}
        case NULL_BASKET:
            return {...state, basket: state.basket * 0}
        default:
            return state
    }
}


export const addBasketAction = () => ({type: ADD_BASKET});
export const getBasketAction = () => ({type: GET_BASKET});
export const nullBasketAction = () => ({type: NULL_BASKET});