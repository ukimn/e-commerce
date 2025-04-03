import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ProductsTypes } from "@/lib/types";
import { FormatPrice } from "@/lib/utils";
import { CommentCardProduct } from "@/components/general/ProductCommentsCard";
import { AddToCartButton } from "@/components/general/AddToCartButton";

async function getProduct(id: string) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await res.json();

  return product;
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  const product: ProductsTypes = await getProduct(id.toString());
  return (
    <>
    <header className="flex justify-start"></header>
      <div className="container mx-auto p-4 max-w-4xl">
        <Card className="overflow-hidden">
          <div className="md:flex">
            {/* Product Image */}
            <div className="md:w-1/2">
              <Image
                src={product.images[0]}
                width={500}
                height={500}
                alt={product.title}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-6">
              <CardHeader className="p-0 mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl font-bold">
                      {product.title}
                    </CardTitle>
                  </div>
                  <Badge
                    variant="outline"
                    className="bg-green-100 text-green-800"
                  >
                    In Stock
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="p-0 space-y-4">
                <div>
                  <h3 className="font-semibold">Description</h3>
                  <p className="text-sm text-gray-600">{product.description}</p>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <span className="text-2xl font-bold">
                    {FormatPrice(product.price)}
                  </span>
                  <div className="flex items-center space-x-2">
                    <AddToCartButton {...product}/>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="p-0 mt-6 text-xs text-gray-500">
                <p>Free shipping on all orders. 30-day return policy.</p>
              </CardFooter>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1 justify-center items-center">
            {product.reviews?.map((comment) => (
              <CommentCardProduct key={comment.reviewerEmail} {...comment} />
            ))}
          </div>
        </Card>
      </div>
    </>
  );
}
