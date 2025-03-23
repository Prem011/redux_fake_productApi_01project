import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fakeApi from "../api/fakeStoreApi";

//async thunk (replaces fetchProductAction and fetchSelectedAction )
export const fetchProducts = createAsyncThunk('products/fetchAll', async () => {
    const response = await fakeApi.get('/products');
    return response.data
}  )

export const fetchSelectedProduct = createAsyncThunk('products/fetchById', async(id) => {
    const response = await fakeApi.get(`/products/${id}`);
    return response.data
})



const  productSlice = createSlice({
    name : "products",
    initialState : {
        items : [],
        selectedProduct: null,
        loading : false,
        error : null
    },
    // reducers : {}, //no need for manual action
    reducers: {
        removeSelectedProduct: (state) => {
            state.selectedProduct = null;
        }
    },
    extraReducers: (builder) => {
        builder 
        .addCase(fetchProducts.pending,
            (state) => {
                state.loading = true
            })
        .addCase(fetchProducts.fulfilled,
            (state, action) => {
                state.loading = false,
                state.items = action.payload;
            })
        .addCase(fetchProducts.rejected,
            (state, action) => {
                state.loading = false,
                state.error = action.error.message
            }
        )
        .addCase(fetchSelectedProduct.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchSelectedProduct.fulfilled, (state, action) => {
            state.loading = false,
            state.selectedProduct = action.payload
        })
        .addCase(fetchSelectedProduct.rejected, (state, action) => {
            state.loading = false,
            state.error = action.error.message
        })
    }
})

export const { removeSelectedProduct } = productSlice.actions;
export default productSlice.reducer;