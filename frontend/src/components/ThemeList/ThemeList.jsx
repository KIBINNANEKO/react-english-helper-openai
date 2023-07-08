import styles from "./theme-list.module.scss";

function ThemeList (props) {

	const {title, themes} = props;

	return(
		<div>
			<h3>{title}</h3>
			{themes?.map(theme => (
				<h4 key={theme}>{theme}</h4>
			))}
		</div>
	);
};

export default ThemeList;