import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSelectedProduct, removeSelectedProduct } from "../redux/slices/productSlice";

const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { selectedProduct, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (productId && productId !== "") dispatch(fetchSelectedProduct(productId));


    // Remove the selected product from the state on unmount
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId, dispatch]);

  if (loading) return <h2 className="text-center">Loading...</h2>;
  if (error) return <h2 className="text-center text-red-500">{error}</h2>;

  return (
    <div className="w-full h-full">
      <div className="flex flex-wrap gap-[4vw] justify-around items-center mt-[5vw]">
        {selectedProduct && (
          <div>
            <h1 className="font-bold capitalize text-xl mb-[2vw]">{selectedProduct.category}</h1>
            <div className="flex gap-[7vw]">
              <div className="w-[15vw] flex justify-center items-center">
                <img src={selectedProduct.image} alt={selectedProduct.title} />
              </div>
              <div className="w-[25vw] mt-[3vw]">
                <h1 className="text-lg my-[1vw]">{selectedProduct.title}</h1>
                <h1 className="text-lg font-bold">${selectedProduct.price}</h1>
                <h1 className="my-[1vw]">{selectedProduct.description}</h1>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;