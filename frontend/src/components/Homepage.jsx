import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "./ProductCard";

const Homepage = () => {
  const { fetchProducts, products } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // console.log("products", products);

  return (
    <>
      <h1 className="text-3xl font-bold justify-center flex mt-5">
        Product List
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      
      {products.length === 0 && (
      <p className="text-center mb-5 text-2xl font-semibold">
        No Product Found 🥲
        <Link to="/create" className="font-bold text-[#39C3EF]">
          Create Product !!
        </Link>
      </p>)}
    </>
  );
};

export default Homepage;
