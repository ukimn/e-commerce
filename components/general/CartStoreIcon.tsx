"use client";
import Link from "next/link";
import { ShoppingCartIcon } from "lucide-react";
import { useCartStore } from "@/app/store/todo.store";

export function CartStoreIcon() {
  const cartStoreItems = useCartStore((state) => state.ChoosedProduct.length);
  return (
    <>
      <nav>
        <Link href={"/products/shoppingCart"} className="relative">
          {cartStoreItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
              {cartStoreItems}
            </span>
          )}
          <ShoppingCartIcon size={24} />
        </Link>
      </nav>
    </>
  );
}
