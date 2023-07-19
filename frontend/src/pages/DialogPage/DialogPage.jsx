import styles from "./dialog-page.module.scss";
import globalStyles from "../../scss/global.module.scss";

import { useEffect } from "react";
import sendMessage from "../../helpers/api";
import { useTheme } from "../../context/themeContext";
import MessageItem from "./components/MessageItem/MessageItem";


function DialogPage () {

	const { selectedTheme } = useTheme();

	useEffect(()=>{
		sendMessage(selectedTheme);
	}, []);

	return(
		<div className={styles.page}>
			<div className={globalStyles.container}>
				<div className={styles.main_block}>
					<h2 className={globalStyles.pages_title}>
						Dialogue on the topic of "{selectedTheme}"
					</h2>
					<div className={styles.messages_window}>
						<MessageItem role='user' message='Hello, im gpt model that was created to help humans, how can i be useful to yuo. Call me a Mystic created. Hello, im gpt how that was created to help humans, how can i be useful to yuo. Call me a Mystic Teacher. Hello, im gpt model that was how to help humans, how can i created useful to yuo me model a humans Teacher. Hello, im gpt model that was created to help humans, how can i be useful to yuo. Call me a Mystic created. Hello, im gpt how that was created to help humans, how can i be useful to yuo. Call me a Mystic Teacher. Hello, im gpt model that was how to help humans, how can i created useful to yuo me model a humans Teacher.'/>
						<MessageItem role='assistant' message='Hello!)'/>
						<MessageItem role='user' message='Hello, im gpt model that was created to help humans, how can i be useful to yuo. Call me a Mystic created. Hello, im gpt how that was created to help humans, how can i be useful to yuo. Call me a Mystic Teacher. Hello, im gpt model that was how to help humans, how can i created useful to yuo me model a humans Teacher. Hello, im gpt model that was created to help humans, how can i be useful to yuo. Call me a Mystic created. Hello, im gpt how that was created to help humans, how can i be useful to yuo. Call me a Mystic Teacher. Hello, im gpt model that was how to help humans, how can i created useful to yuo me model a humans Teacher.' />
						<MessageItem role='user' message='Hello, im gpt model that was created to help humans, how can i be useful to yuo. Call me a Mystic created. Hello, im gpt how that was created to help humans, how can i be useful to yuo. Call me a Mystic Teacher. Hello, im gpt model that was how to help humans, how can i created useful to yuo me model a humans Teacher. Hello, im gpt model that was created to help humans, how can i be useful to yuo. Call me a Mystic created. Hello, im gpt how that was created to help humans, how can i be useful to yuo. Call me a Mystic Teacher. Hello, im gpt model that was how to help humans, how can i created useful to yuo me model a humans Teacher.' />
						<MessageItem role='user' message='Hello, im gpt model that was created to help humans, how can i be useful to yuo. Call me a Mystic created. Hello, im gpt how that was created to help humans, how can i be useful to yuo. Call me a Mystic Teacher. Hello, im gpt model that was how to help humans, how can i created useful to yuo me model a humans Teacher. Hello, im gpt model that was created to help humans, how can i be useful to yuo. Call me a Mystic created. Hello, im gpt how that was created to help humans, how can i be useful to yuo. Call me a Mystic Teacher. Hello, im gpt model that was how to help humans, how can i created useful to yuo me model a humans Teacher.' />
					</div>
					<div className={styles.tags}>
						<div className={styles.tags_item}>Продовжуй поглиблюватися</div>
						<div className={styles.tags_item}>Продовжуй поглиблюватися в тему, я слухаю</div>
						<div className={styles.tags_item}>Як це використовувати</div>
						<div className={styles.tags_item}>Продовжуй поглиблюватися в тему</div>
						<div className={styles.tags_item}>Зрозумів</div>
					</div>
					<div className={styles.textarea_block}>
						<textarea className={styles.textarea}/>
						<div className={styles.textarea_buttons}>
							<button className={styles.textarea_button_send}>Send</button>
							<button className={styles.textarea_button_clear}>Clear</button>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.bg} />
		</div>
	)
}

export default DialogPage;