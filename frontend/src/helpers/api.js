import axios from 'axios';

export default async function sendMessage(message) {
	try {
		console.log(process.env.API_URL);
		const response = await axios.post(process.env.API_URL + '/dialog', { teacher: message });
		console.log(response.data);
	} catch (error) {
		console.error(error);
	}
}