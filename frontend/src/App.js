import ThemeList from "./components/ThemeList/ThemeList";
import styles from "./scss/app.module.scss";

function App() {
  return (
    <div className={styles.container}>
      <ThemeList/>
    </div>
  );
}

export default App;
