import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setSelectedProduct, removeSetSelectedProduct, fetchSelectedProduct } from "../redux/actions/productActions";

const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  console.log("product : ", product);

  const fetchAProduct = async () => {

  //   const response = await axios
  //     .get(`https://fakestoreapi.com/products/${productId}`)
  //     .catch((err) => {
  //       console.error(
  //         "err.message in fetching a single product : ",
  //         err.message
  //       );
  //     });

    console.log("response : ", response);
    dispatch(setSelectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") dispatch(fetchSelectedProduct(productId));

    //remove the selected product from the state
    return  () => {
        dispatch(removeSetSelectedProduct())
    }

  }, [productId]);

  // const displayProduct = (product) => {

  //     const {title, price, description, category, image} = product

  //     return (

  //     )
  // }

  return (
    <>
      <div className="w-full h-full">
        <div className="flex flex-wrap gap-[4vw] justify-around items-center mt-[5vw]">
          <div>
            <h1 className="font-bold capitalize text-xl mb-[2vw]">
              {product.category}
            </h1>
            <div className="flex gap-[7vw]">
              <div className="w-[15vw] flex justify-center items-center">
                <img src={product.image} alt="" />
              </div>
              <div className="w-[25vw] mt-[3vw]" >
                <h1 className="text-lg my-[1vw]" >{product.title}</h1>
                <h1 className="text-lg font-bold" >${product.price}</h1>
                <h1 className="my-[1vw]" >{product.description}</h1>    
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
