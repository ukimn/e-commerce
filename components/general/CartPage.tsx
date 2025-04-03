// The Cart Page

"use client";
import { ProductCartPage } from "@/components/general/ProductCartPage";
import { useCartStore } from "@/app/store/todo.store";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import { ShoppingCartIcon } from "lucide-react";

const ShoppingCartClient = () => {
  const cartProducts = useCartStore((state) => state.ChoosedProduct);
  const clearCart = useCartStore((state) => state.clearCart);
  return (
    <>
      {cartProducts.length > 0 ? (
        <div className="flex flex-col ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-6">
            {cartProducts.map((product) => (
              <ProductCartPage key={product.id} {...product} />
            ))}
          </div>
          <div className="flex items-center justify-evenly space-x-4">
            <Button onClick={clearCart} variant={"destructive"}>
              Clear Cart
            </Button>
            <Button>
              Buy Products <ShoppingCartIcon size={24} />
            </Button>
          </div>
        </div>
      ) : (
        <div className="h-screen flex flex-col items-center justify-center space-y-4">
          <p>Cart is Empty Please Add Products</p>
          <Link
            href={"/products"}
            className={buttonVariants({ variant: "outline" })}
          >
            Products Page
          </Link>
        </div>
      )}
    </>
  );
};

export default ShoppingCartClient;
