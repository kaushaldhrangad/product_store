import React from "react";
import { useProductStore } from "../store/product";
import { useToast } from "@/hooks/use-toast"


const ProductCard = ({ product }) => {
  // const { toast } = useToast()
  const { deleteProduct } = useProductStore();

  const handleDelete = async (pid) => {

    // const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    const {success, message}= await deleteProduct(pid)

    console.log("success", success);
    console.log("Message", message);
    
    if (!success) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    } else {
      toast({
        // variant: "Danger",
        title: "Success!",
        description: "Your Product is deleted successfully!!",
        action: <ToastAction altText="Success">Done</ToastAction>,
      });
    }

  };
  return (
    <div className="flex flex-col items-center mt-9">
      {/* Card Container */}
      <div className="border justify h-auto w-full max-w-md rounded-md bg-gray-800 hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col">
        <a className="block relative h-64 rounded overflow-hidden mb-4">
          <img
            alt={product.name}
            className="object-cover object-center w-full h-full block"
            src={product.image}
          />
        </a>
        {/* Product Name */}
        <h2 className="text-white text-xl font-medium truncate mb-2">
          {product.name}
        </h2>
        {/* Product Price */}
        <p className="text-gray-300 text-lg mb-4">₹{product.price}</p>
        {/* Delete Button */}
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded transition-colors duration-300"
          onClick={()=> handleDelete(product._id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
