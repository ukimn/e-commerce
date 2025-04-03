// The Cart Page

"use client";
import { ProductCartPage } from "@/components/general/ProductCardPage";
import { useCartStore } from "@/app/store/todo.store";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import { ShoppingCartIcon } from "lucide-react";
import { FormatPrice } from "@/lib/utils";

const ShoppingCartClient = () => {
  const cartProducts = useCartStore((state) => state.ChoosedProduct);
  const clearCart = useCartStore((state) => state.clearCart);
  const totalPrice = cartProducts.reduce(
    (total, product) => total + (typeof product.price === "number" ? product.price : 0),
    0
  );
  return (
    <>
      {cartProducts.length > 0 ? (
        <div>
          <header className="text-center text-4xl font-medium my-6">
            <h1>Price: {FormatPrice(totalPrice)}</h1>
          </header>
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
        </div>
      ) : (
        <div className="h-screen flex flex-col items-center justify-center space-y-4">
          <p>Cart is empty, please add products.</p>
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
