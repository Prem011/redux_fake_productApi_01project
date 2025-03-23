import { productActionTypes } from "../constants/actionTypes"

export const setProductActions = (products) => {
    return {
        type : productActionTypes.SET_PRODUCTS,
        payload : products
    }
} 

export const setSelectedProduct = (product) => {
    return {
        type : productActionTypes.SELECTED_PRODUCT,
        payload : product
    }
}

export const removeSetSelectedProduct = () => {
    return {
        type : productActionTypes.REMOVE_SELECTED_PRODUCT,
    }
}