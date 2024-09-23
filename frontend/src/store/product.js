import { create } from 'zustand';

export const useProductStore = create((set) => ({
  products: [],  // Renamed 'product' to 'products' to reflect a list of products
  setProducts: (products) => set({ products }),  // Set the products array correctly
  createProduct: async (newProduct) => {
    // Validate if required fields are present
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      return { success: false, message: "Please fill all the fields" };
    }

    // Make an API request to create a new product
    const res = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });

    const data = await res.json();
    
    // Add the newly created product to the state
    set((state) => ({ products: [...state.products, data.data] }));
    
    return { success: true, message: "Product created successfully" };
  },
}));
