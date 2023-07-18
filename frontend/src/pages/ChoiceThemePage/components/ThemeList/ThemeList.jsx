import styles from "./theme-list.module.scss";
import globalStyles from "../../../../scss/global.module.scss";

import ThemeListItem from "../ThemeListItem/ThemeListItem";
import { useTheme } from "../../../../context/themeContext";
import { useNavigate } from "react-router-dom";


function ThemeList(props){

	let themes = props.data.themes;

	const navigate = useNavigate();

	const { selectedTheme, choiceTheme } = useTheme();

	function redirectToDialog(theme) {
		choiceTheme(theme);
		navigate("/dialog");
	};

	return(
		<div className={globalStyles.container}>
			<h2 className={globalStyles.pages_title}>Choose a topic you want to study:</h2>
			<div className={styles.grid}>
				{themes?.sort((a, b) => (b.themes.length - a.themes.length)).map(theme => (
					<ThemeListItem redirectToDialog={redirectToDialog} key={theme.id} title={theme.title} themes={theme.themes} />
				))}
			</div>
		</div>
	)
}

export default ThemeList;