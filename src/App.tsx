import { Cart, Products } from "./components";
import styles from "./styles/styles.module.scss";

const App = () => {
    return (
        <main className={styles.container}>
            <div className={styles.maxWidth}>
                <Products />
                <div className={styles.cart}>
                    <Cart />
                </div>
            </div>
        </main>
    );
};

export default App;
