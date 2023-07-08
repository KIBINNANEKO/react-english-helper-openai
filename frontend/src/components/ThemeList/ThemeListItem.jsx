import React from "react";
import { useTheme } from "../../context/themeContext";
import styles from "./theme-list.module.scss";

function ThemeListItem (props) {

	const {title, themes} = props;

	const {theme, choiceTheme} = useTheme();

	return(
		<div>
			<h3 className={styles.title}>{title}:</h3>
			<ul>
				{themes?.map(theme => (
					<li onClick={() => choiceTheme(theme)} className={styles.subtitle} key={theme}>{theme}</li>
				))}
			</ul>
		</div>
	);
};

export default React.memo(ThemeListItem);