import { Link } from "react-router-dom";
import styles from "./greeting-page.module.scss";
import mainStyles from "../../scss/app.module.scss";

function GreetingPage(){
	return(
		<div className={styles.page}>
			<div className={[styles.weight, mainStyles.container].join(' ')}>
				<h2 className={styles.title}>Hello, World!</h2>
				<p className={styles.paragraph }>This is my application designed to enhance the English learning experience for Ukrainians.</p>
				<Link className={styles.link }>Switch to topic selection</Link>
				<p className={styles.text }>The project utilizes the ChatGPT 3.5-turbo model from the ChatGPT API chatbot collection.</p>
			</div>
			<div className={styles.bg}></div>
		</div>
	);
};

export default GreetingPage;