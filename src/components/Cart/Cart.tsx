import { carbonNeutral } from "../../assets/images";
import { CartItem } from "../CartItem";
import styles from "./styles.module.scss";
import { CartProps } from "./types";

const Cart = ({ products }: CartProps) => {
    const totalItems = products.reduce((acc, p) => acc + p.quantity, 0);
    const totalPrice = products.reduce((acc, p) => acc + p.quantity * p.price, 0);
    return (
        <section className={styles.container}>
            <h3 className={styles.title}>{`Your Cart (${totalItems})`}</h3>
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
                <div className={styles.price}>${totalPrice}</div>
            </div>
            <div className={styles.carbonFree}>
                <img src={carbonNeutral} />
                <p>
                    This is a <strong>Carbon-neutral</strong> delivery
                </p>
            </div>
            <button className={styles.cta}>Confirm Order</button>
        </section>
    );
};

export default Cart;
