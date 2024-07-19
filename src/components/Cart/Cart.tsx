import { carbonNeutral, emptyCart as emptyCartImage } from "../../assets/images";
import { CartItem } from "../CartItem";
import styles from "./styles.module.scss";
import { useSelector } from "../../store";

const Cart = () => {
    const { products, totalItems, totalPrice } = useSelector(state => state.cart);

    const cartDetails = (
        <>
            <div className={styles.productList}>
                {products.map(p => (
                    <>
                        <CartItem product={p} />
                        <hr />
                    </>
                ))}
            </div>
            <div className={styles.priceDetails}>
                <div>Order Total</div>
                <div className={styles.price}>${totalPrice.toFixed(2)}</div>
            </div>
            <div className={styles.carbonFree}>
                <img src={carbonNeutral} />
                <p>
                    This is a <strong>Carbon-neutral</strong> delivery
                </p>
            </div>
            <button className={styles.cta}>Confirm Order</button>
        </>
    );

    const emptyCart = (
        <div className={styles.empty}>
            <img src={emptyCartImage} alt="empty cart" />
            <p>Your added items will appear here</p>
        </div>
    );

    return (
        <section className={styles.container}>
            <h3 className={styles.title}>{`Your Cart (${totalItems})`}</h3>
            {totalItems ? cartDetails : emptyCart}
        </section>
    );
};

export default Cart;
