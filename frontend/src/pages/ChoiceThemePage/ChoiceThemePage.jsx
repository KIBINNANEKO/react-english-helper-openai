import ThemeListItem from "../../components/ThemeList/ThemeListItem";
import data from "../../data/grammar.json";

import styles from "./choice-theme-page.module.scss";
import mainStyles from "../../scss/app.module.scss";
import globalStyles from "../../scss/global.module.scss";

function ChoiceThemePage(){

	let themes = data.themes;
	

	return(
		<div className={styles.page}>
			<div className={mainStyles.container}>
				<h2 className={globalStyles.pages_title}>Choose a topic you want to study:</h2>
				<div className={styles.grid}>
					{themes?.sort((a, b) => (b.themes.length - a.themes.length)).map(theme => (
						<ThemeListItem key={theme.id} title={theme.title} themes={theme.themes}/>
					))}
				</div>
			</div>
			<div className={styles.bg} />
		</div>
	);
};

export default ChoiceThemePage;