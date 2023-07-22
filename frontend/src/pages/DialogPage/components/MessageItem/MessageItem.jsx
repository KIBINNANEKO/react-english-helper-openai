import styles from './message-item.module.scss';
import studentIcon from './student-icon.svg';
import gptIcon from './gpt-icon.svg';

function MessageItem(props){

	const {role, message, isLoading} = props;

	return(
		<div className={styles.message_block}>
			<div>
				<img className={styles.icon} src={role === 'user' ? studentIcon : gptIcon}/>
			</div>
				{ isLoading 
					? 
					<span className={styles.loader}></span>
					: 
					<div className={styles.message}>
						<p dangerouslySetInnerHTML={message}/>
					</div>}
		</div>
	);
};

export default MessageItem;