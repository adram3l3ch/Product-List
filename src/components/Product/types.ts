export type ProductType = {
    category: string;
    name: string;
    price: number;
    image: string;
    id: number | string;
};

export type ProductProps = {
    product: ProductType;
};
