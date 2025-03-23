// import {createStore, applyMiddleware, compose} from 'redux'
// import reducers from './reducers/index'
// import { thunk } from 'redux-thunk';


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
    //     reducers,
    //     // {}, no need of the initial state 
    //     composeEnhancers(applyMiddleware(thunk))
    //     )
    
    // export default store;
    
    
    //for slice
    
    
import { configureStore } from "@reduxjs/toolkit";
// import { productReducer  } from "./reducers/productReducer";
//for using slice use new reducer
import productReducer from './slices/productSlice'


const store = configureStore({
    reducer : {
        products : productReducer
    }
})

export default store