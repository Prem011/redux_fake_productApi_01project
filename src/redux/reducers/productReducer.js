import { productActionTypes } from "../constants/actionTypes";


const intialState = {
    products : [],
};

    //this will accepts 2 parameters state and action 
    //action is devided into 2 parts type and payload
    //aftere destructuring we will get type and payload

export const productReducer = (state = intialState , {type, payload}) => {
    switch (type) {
        case productActionTypes.SET_PRODUCTS:
            return {...state, products : payload};
        default:
            return state;
    }
}

export const selectedProductReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case productActionTypes.SELECTED_PRODUCT:
            return {...state, ...payload}
        case productActionTypes.REMOVE_SELECTED_PRODUCT:
            return {}
        default:
            return state;
    }
}
