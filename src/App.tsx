import { Cart, Products } from "./components";
import styles from "./styles/styles.module.scss";

const App = () => {
    return (
        <main className={styles.container}>
            <h1>Product List</h1>
            <section className={styles.maxWidth}>
                <Products />
                <div className={styles.cart}>
                    <Cart />
                </div>
            </section>
        </main>
    );
};

export default App;
