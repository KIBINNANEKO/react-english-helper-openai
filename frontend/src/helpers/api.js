import axios from 'axios';

export default async function sendMessage(message) {
	try {
		const response = await axios.post('http://localhost:3001' + '/dialog', { teacher: message });
		console.log(response);
	} catch (error) {
		console.log(error)
	}
}