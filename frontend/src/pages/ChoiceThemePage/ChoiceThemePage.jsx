import ThemeList from "../../components/ThemeList/ThemeList";
import data from "../../data/grammar.json";

import styles from "./choice-theme-page.module.scss";

function ChoiceThemePage(){

	const themes = data.themes;

	return(
		<div>
			{themes.map(theme => (
				<ThemeList key={theme.id} title={theme.title} themes={theme.themes}/>
			))}
		</div>
	);
};

export default ChoiceThemePage;