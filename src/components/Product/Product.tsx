import styles from "./styles.module.scss";
import { ProductProps } from "./types";
import cartIcon from "../../assets/images/icon-add-to-cart.svg";

const Product = (props: ProductProps) => {
    const {
        product: { image, name, price, category },
    } = props;
    return (
        <section className={styles.container}>
            <img src={image} className={styles.image} />
            <button className={styles.cartButton}>
                <img src={cartIcon} />
                Add to cart
            </button>
            <h5 className={styles.category}>{category}</h5>
            <h5 className={styles.name}>{name}</h5>
            <p className={styles.price}>${price}</p>
        </section>
    );
};

export default Product;
