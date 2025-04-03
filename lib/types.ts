interface routeTypes {
  id: number;
  title: string;
  route: string;
}

interface HomeCardProps {
  id: number;
  animation: Object | string;
  topic: string;
  description: string;
}

interface CommentCardProps {
  id?: number;
  Name: string;
  image?: string;
  description: string;
  date: number | Date;
}

interface commentTypes {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

interface ProductsTypes {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  rating: number;
  images: string[];
  stock: number;
  tags: string[];
  reviews?: commentTypes[];
}

interface ProductsCartStore {
  ChoosedProduct: ProductsTypes[];
  addProduct: (product: ProductsTypes) => void;
  removeProduct: (id: number) => void;
  clearCart: () => void;
}

interface ProductsPageHostingProps {
  Product: {
    products: ProductsTypes[];
  };
}

export type {
  routeTypes,
  commentTypes,
  HomeCardProps,
  CommentCardProps,
  ProductsTypes,
  ProductsPageHostingProps,
  ProductsCartStore,
};
