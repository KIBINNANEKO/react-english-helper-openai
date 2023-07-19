import styles from "./dialog-page.module.scss";
import globalStyles from "../../scss/global.module.scss";

import { useEffect, useState } from "react";
import { useTheme } from "../../context/themeContext";
import MessageItem from "./components/MessageItem/MessageItem";
import useDebounce from "../../hooks/useDebounce";
import axios from "axios";
import useInput from "../../hooks/useInput";


function DialogPage () {

	const { selectedTheme } = useTheme();

	const [messages, setMessages] = useState([]);
	const userMessage = useInput('');

	async function sendMessage(textMessage) {
		try {
			const response = await axios.post('http://localhost:3001' + '/dialog', { teacher: textMessage });
			const message = await response.data.choices[0].message;
			setMessages(prev => [...prev, message]);
		} catch (error) {
			console.log(error)
		}
	}

	const debounsedSendMessage = useDebounce(sendMessage, 2000);

	useEffect(()=>{
		debounsedSendMessage(selectedTheme);
		console.log(messages);
	}, []);

	return(
		<div className={styles.page}>
			<div className={globalStyles.container}>
				<div className={styles.main_block}>
					<h2 className={globalStyles.pages_title}>
						Dialogue on the topic of "{selectedTheme}"
					</h2>
					<div className={styles.messages_window}>
						{
							messages.map((content, index) => (
								<MessageItem role={content?.role} message={content?.content} key={index}/>
							))
						}
					</div>
					<div className={styles.tags}>
						<div className={styles.tags_item}>Продовжуй поглиблюватися</div>
						<div className={styles.tags_item}>Продовжуй поглиблюватися в тему, я слухаю</div>
						<div className={styles.tags_item}>Як це використовувати</div>
						<div className={styles.tags_item}>Продовжуй поглиблюватися в тему</div>
						<div className={styles.tags_item}>Зрозумів</div>
					</div>
					<div className={styles.textarea_block}>
						<textarea className={styles.textarea} value={userMessage.value} onChange={userMessage.onChange}/>
						<div className={styles.textarea_buttons}>
							<button className={styles.textarea_button_send} onClick={() => sendMessage(userMessage.value)}>Send</button>
							<button className={styles.textarea_button_clear} onClick={userMessage.clear}>Clear</button>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.bg} />
		</div>
	)
}

export default DialogPage;