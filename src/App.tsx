import { Cart, Products } from "./components";
import styles from "./styles/styles.module.scss";

const App = () => {
    return (
        <main className={styles.container}>
            <div className={styles.maxWidth}>
                <Products />
                <Cart />
            </div>
        </main>
    );
};

export default App;
