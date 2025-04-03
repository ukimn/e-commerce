import { ProductsPage } from "@/components/general/ProductsPage";
import ProductSkeletonLoader from "@/components/general/ProductsSkeleton";
import { Suspense } from "react";

async function getProducts(){
  const res = await fetch("https://dummyjson.com/products");
  const products = await res.json();

  return products;
}

const Products = () => {
  return (
    <div>
      <Suspense fallback={<ProductSkeletonLoader/>}>
          <ShowProducts/>
      </Suspense>
    </div>
  )
}

const ShowProducts = async()=>{
  const products = await getProducts();

  return (
    <div>
      <ProductsPage Product={products}/>
    </div>
  )
}

export default Products;
