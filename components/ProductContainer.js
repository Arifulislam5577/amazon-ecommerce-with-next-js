import React from "react";
import { products } from "../utils/data";
import Image from "next/image";

const ProductContainer = () => {
  return (
    <div className=" py-10 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5">
      {products.map((product) => (
        <article
          className="p-5 bg-gray-50 flex flex-col items-center justify-center shadow"
          key={product.id}
        >
          <Image
            src={product.image}
            alt={product.title}
            height="100%"
            width="100%"
          />

          <div className="product-description mt-5 text-center">
            <h2 className="font-bold text-sm text-slate-900 hover:text-slate-700 transition-all">
              {product.title}
            </h2>

            <h3 className="text-slate-900 my-5">${product.price}</h3>
            <button className="bg-gray-200 py-2 px-4  hover:bg-slate-900 transition-all hover:text-gray-50 rounded-md border-none text-slate-900 hover:scale-90">
              Add to cart
            </button>
          </div>
        </article>
      ))}

      <div className="lg:col-span-1 w-full"></div>
    </div>
  );
};

export default ProductContainer;
