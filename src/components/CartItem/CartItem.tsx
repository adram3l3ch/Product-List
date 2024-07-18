import { close } from "../../assets/images";
import styles from "./styles.module.scss";
import { CartItemProps } from "./types";

const CartItem = ({ product }: CartItemProps) => {
    const { name, price, quantity } = product;
    return (
        <div className={styles.container}>
            <div className={styles.details}>
                <h5 className={styles.title}>{name}</h5>
                <div className={styles.footer}>
                    <div className={styles.quantity}>{quantity}x</div>
                    <div className={styles.totalPrice}>@ ${price * quantity}</div>
                    <div className={styles.price}>${price}</div>
                </div>
            </div>
            <button className={styles.clearButton}>
                <img src={close} />
            </button>
        </div>
    );
};

export default CartItem;
