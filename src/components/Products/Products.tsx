import { Product } from "../Product";
import { ProductType } from "../Product/types";
import styles from "./styles.module.scss";

type ProductsProps = {
    products: ProductType[];
};

const Products = ({ products }: ProductsProps) => {
    return (
        <section className={styles.container}>
            <h1 className={styles.title}>Desserts</h1>
            <div className={styles.productList}>
                {products.map(p => (
                    <Product product={p} key={p.name} />
                ))}
            </div>
        </section>
    );
};

export default Products;
