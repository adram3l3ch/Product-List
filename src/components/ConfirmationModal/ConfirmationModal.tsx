import { tick } from "../../assets/images";
import styles from "./styles.module.scss";
import { useSelector } from "../../store";
import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { emptyCart } from "../../features";

type ConfirmationModalProps = {
    open?: boolean;
    onClose?: () => void;
};

const ConfirmationModal = ({ open, onClose }: ConfirmationModalProps) => {
    const { products, totalPrice } = useSelector(state => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        document.body.style.setProperty("overflow", open ? "hidden" : "auto");
    }, [open]);

    const handleStartNewOrder = () => {
        onClose?.();
        setTimeout(() => dispatch(emptyCart()), 300);
    };
    return (
        <section className={styles.container + " " + (open ? styles.open : "")}>
            <div className={styles.modal}>
                <img src={tick} alt="tick" />
                <h3 className={styles.title}>Order Confirmed</h3>
                <p className={styles.subtitle}>We hope you enjoy your food!</p>
                <div className={styles.details}>
                    <div className={styles.productsList}>
                        {products.map(p => (
                            <Fragment key={p.id}>
                                <div className={styles.product}>
                                    <img src={p.image} alt={p.name} />
                                    <div className={styles.productDetail}>
                                        <div className={styles.name}>{p.name}</div>
                                        <div className={styles.price}>
                                            {p.quantity}x <span>@ ${p.price.toFixed(2)}</span>
                                        </div>
                                    </div>
                                    <div className={styles.totalPrice}>${(p.price * p.quantity).toFixed(2)}</div>
                                </div>
                                <hr />
                            </Fragment>
                        ))}
                    </div>
                    <div className={styles.totalPrice}>
                        <p>Order Total</p>
                        <div className={styles.price}>${totalPrice.toFixed(2)}</div>
                    </div>
                </div>
                <button className={styles.cta} onClick={handleStartNewOrder}>
                    Start New Order
                </button>
            </div>
        </section>
    );
};

export default ConfirmationModal;
