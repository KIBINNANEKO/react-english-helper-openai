import styles from "./dialog-page.module.scss";
import globalStyles from "../../scss/global.module.scss";

import { useEffect, useState } from "react";
import { useTheme } from "../../context/themeContext";
import axios from "axios";
import useInput from "../../hooks/useInput";
import MessageWindow from "./components/MessageWindow/MessageWindow";
import useDebounce from "../../hooks/useDebounce";


function DialogPage () {

	const { selectedTheme } = useTheme();
	const [messages, setMessages] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const userMessage = useInput('');

	async function sendMessage(textMessage, needToClear) {
		try {
			setIsLoading(prev => !prev);
			const response = await axios.post('http://localhost:3001' + '/dialog', { teacher: textMessage, needToClear: needToClear });
			const message = await response.data.choices[0].message;
			const newObj = await { ...message, content: message.content.replace(/\n/g, '<br/>')};
			setMessages(prev => [...prev, newObj]);
			setIsLoading(prev => !prev);
			console.log("я тут");
		} catch (error) {
			console.log(error)
		}
	}

	const debouncedSendMessage = useDebounce(sendMessage, 100);

	function submitMessage(message) {
		try {
			setMessages(prev => [...prev, { role: 'user', content: message }]);
			setTimeout(() => {
				userMessage.clear();
				debouncedSendMessage(message, false);
			}, 150)
		}
		catch (error) {
			console.log(error);
		}
	}

	useEffect(()=>{
		debouncedSendMessage(selectedTheme, false);

		return function(){
			debouncedSendMessage('no data', true);
		}
	}, []);

	return(
		<div className={styles.page}>
			<div className={globalStyles.container}>
				<div className={styles.main_block}>
					<h2 className={globalStyles.pages_title}>
						Dialogue on the topic of "{selectedTheme}"
					</h2>
					<MessageWindow messages={messages} userMessage={userMessage} onSendMessage={submitMessage} isLoading={isLoading}/>
					{/* <div className={styles.tags}><div className={styles.tags_item}>Продовжуй поглиблюватися</div></div> */}
				</div>
			</div>
			<div className={styles.bg} />
		</div>
	)
}

export default DialogPage;