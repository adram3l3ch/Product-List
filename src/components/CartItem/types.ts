import { ProductType } from "../Product";

export type CartItemProps = {
    product: ProductType & { quantity: number };
};
