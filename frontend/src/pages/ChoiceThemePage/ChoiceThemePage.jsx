import styles from "./choice-theme-page.module.scss";

import data from "../../data/grammar.json";
import ThemeList from "./components/ThemeList/ThemeList";

function ChoiceThemePage(){
	
	return(
		<div className={styles.page}>
			<ThemeList data={data}/>
			<div className={styles.bg} />
		</div>
	);
};

export default ChoiceThemePage;