import fakeApi from ".././api/fakeStoreApi"
import { productActionTypes } from "../constants/actionTypes"


// sync action creator
// export const fetchProductAction = async(product) => {

//     const response = await axios.get("/products")

//     return {
//         type : productActionTypes.FETCH_PRODUCTS,
//         payload : product
//     }
// }

// async action creator 
export const fetchProductAction = () => {
    //middleware to make the asynchronous api call
    return async (dispatch) => {
        const response = await fakeApi.get("/products")
        dispatch({type : productActionTypes.FETCH_PRODUCTS, 
            payload : response.data
        })
    }
}

// thunk 
export const fetchSelectedProduct = (productId) => {
    return async(dispatch) => {
        const response = await fakeApi.get(`/products/${productId}`)
        console.log("response of the action : ", response)
        dispatch({type : productActionTypes.SELECTED_PRODUCT,
            payload : response.data
        })
    }
}

//if we make the outer function async then it will throw the error :- that the async function should return the plain javascript object

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