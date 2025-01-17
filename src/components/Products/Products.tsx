import { useSelector } from "../../store";
import { Product } from "../Product";
import styles from "./styles.module.scss";

const Products = () => {
    const products = useSelector(state => state.products);
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Desserts</h2>
            <div className={styles.productList}>
                {products.map(p => (
                    <Product product={p} key={p.name} />
                ))}
            </div>
        </section>
    );
};

export default Products;
