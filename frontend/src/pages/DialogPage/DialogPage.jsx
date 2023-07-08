import styles from "./dialog-page.module.scss";
import globalStyles from "../../scss/global.module.scss";
import { useEffect } from "react";
import axios from 'axios';

function DialogPage () {

	async function sendMessage(message) {
		try {
			const response = await axios.post('http://localhost:3001/dialog', { teacher: message });
			console.log(response.data);
		} catch (error) {
			console.error(error); 
		}
	}

	useEffect(()=>{
		sendMessage("Глаголи");
	}, []);

	return(
		<div>
			<div className={globalStyles.container}></div>
		</div>
	)
}

export default DialogPage;