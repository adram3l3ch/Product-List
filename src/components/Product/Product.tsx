import styles from "./styles.module.scss";
import { ProductProps } from "./types";
import { useDispatch } from "react-redux";
import { addProductToCart, modifyProductQuantity } from "../../features";
import { addToCart, decrement, increment } from "../../assets/images";
import { useSelector } from "../../store";

const Product = (props: ProductProps) => {
    const { product } = props;
    const { image, name, price, category, id } = product;
    const { products } = useSelector(state => state.cart);

    const dispatch = useDispatch();

    const handleAddProductToCart = () => {
        dispatch(addProductToCart(product));
    };

    const handleModifyQuantity = (by: -1 | 1) => {
        dispatch(modifyProductQuantity({ id, by }));
    };

    const productInCart = products.find(p => p.id === id);

    return (
        <section className={styles.container}>
            <div className={styles.image} style={{ borderColor: !productInCart ? "transparent" : undefined }}>
                <img src={image} alt={name} />
            </div>
            {productInCart ? (
                <div className={styles.modifyCartButton}>
                    <button onClick={() => handleModifyQuantity(-1)}>
                        <img src={decrement} alt="remove" />
                    </button>
                    <span>{productInCart.quantity}</span>
                    <button onClick={() => handleModifyQuantity(1)} disabled={productInCart.quantity >= 20}>
                        <img src={increment} alt="add" />
                    </button>
                </div>
            ) : (
                <button className={styles.cartButton} onClick={handleAddProductToCart}>
                    <img src={addToCart} alt="add to cart" />
                    Add to cart
                </button>
            )}
            <h5 className={styles.category}>{category}</h5>
            <h5 className={styles.name}>{name}</h5>
            <p className={styles.price}>${price.toFixed(2)}</p>
        </section>
    );
};

export default Product;
