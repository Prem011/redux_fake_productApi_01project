import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
// import { setProductActions, fetchProductAction } from '../redux/actions/productActions';
import { fetchProducts } from "../redux/slices/productSlice";
import axios from "axios";

const ProductLisiting = () => {
  const { items, loading, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  // const fetchAllProducts = async () => {
  //     const response = await axios
  //     .get("https://fakestoreapi.com/products")
  //     .catch((err) => {
  //         console.log("error in fetching all products : ", err.message)
  //     })
  //     // console.log("Response of all products : ", response.data)
  //     //save the retrived data into the store to pass it to all whole react application
  //     dispatch(setProductActions(response.data))
  // }

  useEffect(() => {
    //  dispatch(fetchProductAction())
    dispatch(fetchProducts());
  }, [dispatch]);

  // console.log("Products : ", products)

  return (
    <div>
      {/* <ProductComponent/>
       */}
      {loading && <h2 className="text-center">Loading...</h2>}
      {error && <h2 className="text-center text-red-500">{error}</h2>}
      <ProductComponent products={items} />
    </div>
  );
};

export default ProductLisiting;
