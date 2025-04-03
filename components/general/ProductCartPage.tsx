"use client";

import { ProductsTypes } from "@/lib/types";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FormatPrice } from "@/lib/utils";
import { ShoppingCartIcon } from "lucide-react";
import { useCartStore } from "@/app/store/todo.store";

export function ProductCartPage({
  price,
  images,
  title,
  description,
  category,
  rating,
  stock,
  tags,
  id,
}: ProductsTypes) {
  const removeProduct = useCartStore((state) => state.removeProduct)
  return (
    <Card className="shadow-md transition-shadow hover:shadow-lg flex flex-col items-center justify-center">
      <div className="w-full relative rounded-lg">
        {" "}
        {/* Removed h- and overflow-hidden */}
        <CardHeader className="mb-4">
          <div className="flex items-center justify-between w-full mb-2">
            {stock > 0 ? (
              <h1 className="text-green-500">In Stock</h1>
            ) : (
              <h1 className="text-red-500">Out of Stock</h1>
            )}
            <h1>Stock: {stock}</h1>
          </div>
          <h1 className="text-gray-500">{tags.join(", ")}</h1>
        </CardHeader>
        {/* Image Container - Added min-h for consistent height */}
        <div className="min-h-[300px] relative">
          {images[0] ? (
            <Image
              src={images[0]}
              priority={true}
              alt="Product image"
              fill // Replaces width/height (fills parent container)
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="flex items-center justify-center h-[300px] bg-gray-100 rounded-lg">
              <span className="text-gray-400">
                No image available
                <ShoppingCartIcon />
              </span>
            </div>
          )}
        </div>
      </div>
      <CardContent className="flex flex-col w-full p-4">
        <CardTitle className="mb-5 text-3xl">{title}</CardTitle>
        <CardDescription className="text-center ">
          {description.length > 100
            ? description.slice(0, 100) + "..."
            : description}
        </CardDescription>
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-between my-5 w-full">
            <Button className={`my-5 py-6 px-6`} onClick={()=>removeProduct(id)}>Remove Product</Button>
            <h2 className="text-3xl font-medium">{FormatPrice(price)}</h2>
          </div>
          <Link href={`products/${id}`} className="w-full">
            <Button className="w-full">View Details</Button>
          </Link>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex items-center justify-center w-full gap-3 ">
          <h3 className="text-lg font-semibold">{category}</h3>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`text-xl ${
                  star <= Math.round(rating)
                    ? "text-yellow-500"
                    : "text-gray-300"
                }`}
              >
                {star <= rating ? "★" : "☆"}
              </span>
            ))}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
