import React from "react";
import { useTheme } from "../../context/themeContext";
import { useNavigate } from "react-router-dom";

import styles from "./theme-list.module.scss";

function ThemeListItem (props) {

	const {title, themes} = props;

	const navigate = useNavigate();

	const {theme, choiceTheme} = useTheme();

	function redirectToDialog(theme){
		choiceTheme(theme);
		navigate("/dialog");
	};

	return(
		<div>
			<h3 className={styles.title}>{title}:</h3>
			<ul>
				{themes?.map(theme => (
					<li onClick={() => redirectToDialog(theme)} className={styles.subtitle} key={theme}>{theme}</li>
				))}
			</ul>
		</div>
	);
};

export default React.memo(ThemeListItem);