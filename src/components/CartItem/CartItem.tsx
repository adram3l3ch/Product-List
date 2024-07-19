import { useDispatch } from "react-redux";
import { close } from "../../assets/images";
import styles from "./styles.module.scss";
import { CartItemProps } from "./types";
import { removeProductFromCart } from "../../features";

const CartItem = ({ product }: CartItemProps) => {
    const { name, price, quantity } = product;
    const dispatch = useDispatch();

    const handleRemoveProductFromCart = () => {
        dispatch(removeProductFromCart({ id: product.id }));
    };
    return (
        <div className={styles.container}>
            <div className={styles.details}>
                <h5 className={styles.title}>{name}</h5>
                <div className={styles.footer}>
                    <div className={styles.quantity}>{quantity}x</div>
                    <div className={styles.totalPrice}>@ ${(price * quantity).toFixed(2)}</div>
                    <div className={styles.price}>${price.toFixed(2)}</div>
                </div>
            </div>
            <button className={styles.clearButton} onClick={handleRemoveProductFromCart}>
                <img src={close} alt="remove" />
            </button>
        </div>
    );
};

export default CartItem;
