import {useState} from "react";

function useInput(Value){

	function clear(){
		setValue('')
	}

	const [value, setValue] = useState(Value)
	const onChange = event => {
		setValue(event.target.value)
	}
	
	return {
		value, onChange, clear
	}
}

export default useInput