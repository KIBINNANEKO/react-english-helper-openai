import axios from 'axios';

export default async function sendMessage(message) {
	try {
		const response = await axios.post('http://localhost:3001' + '/dialog', { teacher: message });
		console.log(response.data);
	} catch (error) {
		console.error(error);
	}
}