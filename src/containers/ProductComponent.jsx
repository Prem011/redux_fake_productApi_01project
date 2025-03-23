// import axios from "axios";
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setProductActions } from "../redux/actions/productActions";
// import { Link } from "react-router-dom";

// const ProductComponent = () => {
//   const products = useSelector((state) => state);
//   console.log("products : ", products )

//   const renderList = products.map((product) => {
//     const { id, title, price, rating, image, description, category } = product;

//     return (
//       <Link key={id} to={`/product/${id}`}>
//         <div
//           className=" w-[18vw] h-85 flex flex-col justify-center items-center gap-[1.3vw] p-3 border boder-0 rounded-lg border-zinc-200 bg-red"
          
//         >
//           <div  >
//             <img
//               className="h-50 w-50 bg-contain bg-center bg-red-400"
//               src={image}
//               alt=""
//             />
//           </div>
//           <div>
//             {title}
//             <div className="flex gap-[1vw]">
//               <h1 className="font-semibold">Price : ${price}</h1>
//               <h1 className="text-zinc-400">{category}</h1>
//             </div>
//           </div>
//         </div>
//       </Link>
//     );
//   });

//   return (
//     <>
//       <div className="w-full h-full">
//         <div className="flex flex-wrap gap-[4vw] justify-around items-center mt-[5vw]">
//           {renderList}
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProductComponent;




import React from "react";
import { Link } from "react-router-dom";

const ProductComponent = ({ products }) => {
    return (
        <div className="w-full h-full">
            <div className="flex flex-wrap gap-[4vw] justify-around items-center mt-[5vw]">
                {products.map((product) => {
                    const { id, title, price, category, image } = product;
                    return (
                        <Link key={id} to={`/product/${id}`}>
                            <div className="w-[18vw] h-85 flex flex-col justify-center items-center gap-[1.3vw] p-3 border border-0 rounded-lg border-zinc-200">
                                <div>
                                    <img className="h-50 w-50 bg-contain bg-center" src={image} alt={title} />
                                </div>
                                <div>
                                    <h2 className="font-bold">{title}</h2>
                                    <div className="flex gap-[1vw]">
                                        <h1 className="font-semibold">Price: ${price}</h1>
                                        <h1 className="text-zinc-400">{category}</h1>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default ProductComponent;
