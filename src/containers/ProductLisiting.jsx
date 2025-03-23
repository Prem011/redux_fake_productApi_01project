import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent';
import { setProductActions } from '../redux/actions/productActions';
import axios from 'axios';

const ProductLisiting = () => {
    const products = useSelector((state) => state.allProducts.products)
    const dispatch = useDispatch()

    const fetchAllProducts = async () => {
        const response = await axios
        .get("https://fakestoreapi.com/products")
        .catch((err) => {
            console.log("error in fetching all products : ", err.message)
        })
        // console.log("Response of all products : ", response.data)
        //save the retrived data into the store to pass it to all whole react application
        dispatch(setProductActions(response.data))

    }

    useEffect(() => {
     fetchAllProducts()
    }, [])
    // console.log("Products : ", products)
    
  return (
    <div>
        <ProductComponent/>
    </div>
  )
}

export default ProductLisiting
