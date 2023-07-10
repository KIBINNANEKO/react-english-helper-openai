import ThemeListItem from "../../components/ThemeList/ThemeListItem";
import data from "../../data/grammar.json";

import styles from "./choice-theme-page.module.scss";
import globalStyles from "../../scss/global.module.scss";
import { useTheme } from "../../context/themeContext";
import { useNavigate } from "react-router-dom";

function ChoiceThemePage(){

	let themes = data.themes;

	const navigate = useNavigate();

	const { selectedTheme, choiceTheme } = useTheme();

	function redirectToDialog(theme) {
		choiceTheme(theme);
		navigate("/dialog");
	};
	
	return(
		<div className={styles.page}>
			<div className={globalStyles.container}>
				<h2 className={globalStyles.pages_title}>Choose a topic you want to study:</h2>
				<div className={styles.grid}>
					{themes?.sort((a, b) => (b.themes.length - a.themes.length)).map(theme => (
						<ThemeListItem redirectToDialog={redirectToDialog} key={theme.id} title={theme.title} themes={theme.themes}/>
					))}
				</div>
			</div>
			<div className={styles.bg} />
		</div>
	);
};

export default ChoiceThemePage;