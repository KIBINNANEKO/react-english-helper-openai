import React from "react";

import styles from "./theme-list.module.scss";

function ThemeListItem (props) {

	const { title, themes, redirectToDialog } = props;

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