interface routeTypes{
    id: number;
    title: string;
    route: string;
}

interface HomeCardProps{
    id: number,
    animation: Object | string;
    topic: string;
    description: string;
}

interface CommentCardProps{
    id?: number;
    Name: string;
    image: string;
    description: string;
    date: number | Date;
}

interface ProductsTypes{
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    rating: number;
    images: string[];
    stock: number;
    tags: string[];
}


interface ProductsPageHostingProps{
    Product: {
        products: ProductsTypes[]
    };
}

export type { routeTypes, HomeCardProps, CommentCardProps, ProductsTypes, ProductsPageHostingProps }