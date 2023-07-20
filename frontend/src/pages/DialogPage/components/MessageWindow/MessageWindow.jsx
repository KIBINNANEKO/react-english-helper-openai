import React, { useEffect, useRef } from "react";
import styles from "./message-window.module.scss";
import MessageItem from "../MessageItem/MessageItem";

const MessageWindow = ({ messages, userMessage, onSendMessage}) => {

	const messagesWindowRef = useRef(null);

	const scrollToBottom = () => {
		if (messagesWindowRef.current) {
			messagesWindowRef.current.scrollTop = messagesWindowRef.current.scrollHeight;
		}
	};

	useEffect(() => {
		scrollToBottom();
	}, [messages]);

	return (
		<div>
			<div className={styles.messages_window} ref={messagesWindowRef}>
				{messages.map((content, index) => (
					<MessageItem role={content?.role} message={{ __html: content?.content }} key={index} />
				))}
			</div>
			<div className={styles.textarea_block}>
				<textarea className={styles.textarea} value={userMessage.value} onChange={userMessage.onChange} />
				<div className={styles.textarea_buttons}>
					<button className={styles.textarea_button_send} onClick={() => onSendMessage(userMessage.value)}>
						Send
					</button>
					<button className={styles.textarea_button_clear} onClick={userMessage.clear}>
						Clear
					</button>
				</div>
			</div>
		
		</div>
	);
};

export default MessageWindow;