const stateDefault = {
    exists: {
        iphone: 5,
        samsung: 5,
        vivo: 5,
        htc: 5,
        infinix: 5,
        nokia: 5,
        realme: 5,
        xiaomi: 5
    }
}

const baseState = {
    iphone: 5,
    samsung: 5,
    vivo: 5,
    htc: 5,
    infinix: 5,
    nokia: 5,
    realme: 5,
    xiaomi: 5
}


const ADD_PHONE = "ADD_PHONE";
const GET_PHONE = "GET_PHONE";
const CLEAR_PHONE = "CLEAR_PHONE";

export const existsReducer = (state = stateDefault, action) => {


    switch (action.type) {
        case ADD_PHONE:
            return { ...state, exists: { ...state.exists, [action.payload]: state.exists[action.payload] + 1 } }
        case GET_PHONE:
            return { ...state, exists: { ...state.exists, [action.payload]: state.exists[action.payload] - 1 } }
        case CLEAR_PHONE:
            return { ...state, exists: {...baseState} }
        default:
            return state
    }
}

export const addPhoneAction = (payload) => ({ type: ADD_PHONE, payload });
export const getPhoneAction = (payload) => ({ type: GET_PHONE, payload });
export const clearPhoneAction = () => ({ type: CLEAR_PHONE })