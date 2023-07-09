import { useEffect } from "react";
import sendMessage from "../../helpers/api";

import styles from "./dialog-page.module.scss";
import globalStyles from "../../scss/global.module.scss";


function DialogPage () {



	useEffect(()=>{
		sendMessage("Продовжуй поглиблюватися в тему, я слухаю");
	}, []);

	return(
		<div>
			<div className={globalStyles.container}></div>
		</div>
	)
}

export default DialogPage;