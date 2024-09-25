import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useProductStore } from "../store/product";
import { useToast } from "@/hooks/use-toast"
import { ToastAction } from "@/components/ui/toast"



const CreatePage = () => {
  const { toast } = useToast()

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const { createProduct } = useProductStore();

  const handleSubmit = async () => {
    const { success, message } = await createProduct(newProduct);
    console.log("success", success);
    console.log("message", message);

    if(!success) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })} else {
        toast({
          // variant: "Danger",
          title: "Success!",
          description: "Your Product is created successfully!!",
          action: <ToastAction altText="Success">Done</ToastAction>
      })
      setNewProduct({
        name: "",
        price: "",
        image: "",
      })
    }

  };

  return (
    <div className=" min-h-screen overflow-hidden flex items-center justify-center p-4">
      <Card className="w-full max-w-[550px] ">
        <CardHeader>
          <CardTitle className="text-2xl sm:text-3xl">Create Product</CardTitle>
          <CardDescription>
            Create and list your new product.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name" className="text-lg sm:text-xl">
                  Name
                </Label>
                <Input
                  type="text"
                  name="name"
                  placeholder="Name of your product"
                  value={newProduct.name}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, name: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col space-y-1.5 mt-3">
                <Label htmlFor="framework" className="text-lg sm:text-xl">
                  Price
                </Label>
                <Input
                  type="number"
                  name="price"
                  placeholder="Enter your product price"
                  value={newProduct.price}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, price: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col space-y-1.5 mt-3">
                <Label htmlFor="picture" className="text-lg sm:text-xl">
                  Image
                </Label>
                <Input
                  name="image"
                  type="text"
                  value={newProduct.image}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, image: e.target.value })
                  }
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-start ">
          <Button type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CreatePage;
