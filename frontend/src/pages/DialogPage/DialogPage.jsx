import styles from "./dialog-page.module.scss";
import globalStyles from "../../scss/global.module.scss";

import { useEffect, useState } from "react";
import { useTheme } from "../../context/themeContext";
import MessageItem from "./components/MessageItem/MessageItem";
import useDebounce from "../../hooks/useDebounce";
import axios from "axios";
import useInput from "../../hooks/useInput";
import MessageWindow from "./components/MessageWindow/MessageWindow";


function DialogPage () {

	const { selectedTheme } = useTheme();

	const [messages, setMessages] = useState([]);
	const userMessage = useInput('');

	async function sendMessage(textMessage, needToClear) {
		try {
			const response = await axios.post('http://localhost:3001' + '/dialog', { teacher: textMessage, needToClear: needToClear });
			const message = await response.data.choices[0].message;
			const newObj = await { ...message, content: message.content.replace(/\n/g, '<br/>')};
			console.log(response);
			setMessages(prev => [...prev, newObj]);
		} catch (error) {
			console.log(error)
		}
	}

	const debounsedSendMessage = useDebounce(sendMessage, 2000);

	useEffect(()=>{
		debounsedSendMessage(selectedTheme, false);

		return function(){
			debounsedSendMessage('no data', true);
		}
	}, []);

	function submitMessage(message){
		try{
			setMessages(prev => [...prev, { role: 'user', content: message }]);
			userMessage.clear();
			debounsedSendMessage(message, false);
		}
		catch(error){
			console.log(error);
		}
	}

	return(
		<div className={styles.page}>
			<div className={globalStyles.container}>
				<div className={styles.main_block}>
					<h2 className={globalStyles.pages_title}>
						Dialogue on the topic of "{selectedTheme}"
					</h2>
					<MessageWindow messages={messages} userMessage={userMessage} onSendMessage={submitMessage} />
					{/* <div className={styles.tags}>
						<div className={styles.tags_item}>Продовжуй поглиблюватися</div>
						<div className={styles.tags_item}>Продовжуй поглиблюватися в тему, я слухаю</div>
						<div className={styles.tags_item}>Як це використовувати</div>
						<div className={styles.tags_item}>Продовжуй поглиблюватися в тему</div>
						<div className={styles.tags_item}>Зрозумів</div>
					</div> */}
				</div>
			</div>
			<div className={styles.bg} />
		</div>
	)
}

export default DialogPage;