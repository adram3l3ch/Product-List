import { useSelector } from "react-redux";
import { Product } from "../Product";
import styles from "./styles.module.scss";
import { RootState } from "../../store";

const Products = () => {
    const products = useSelector((state: RootState) => state.products);
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
