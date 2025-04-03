"use client";

import { useCartStore } from "@/app/store/todo.store";
import { Button } from "../ui/button";
import { ProductsTypes } from "@/lib/types";

export function AddToCartButton({price, id,  title, description, category, rating, images, stock, tags}: ProductsTypes){
    const addToCart = useCartStore((state) => state.addProduct);
    return (
        <Button onClick={() => addToCart({id ,price, title, description, category, rating, images, stock, tags})}>Add to Cart</Button>
    )
}