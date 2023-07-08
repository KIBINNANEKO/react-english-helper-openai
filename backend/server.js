const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const { Configuration, OpenAIApi } = require('openai');

dotenv.config();

const app = express();
app.use(cors());
const port = 3001;


app.use(express.json());

const openaiConfiguration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
	organization: "org-PxwAlwXWgfIouzsAWOiFtook",
});

const openai = new OpenAIApi(openaiConfiguration);

let isFirstMessage = true;

app.post('/dialog', async (req, res) => {
	const { teacher } = req.body;

	try {
		if (!openaiConfiguration.apiKey) {
			res.status(500).json({
				error: {
					message: 'API ключ не дійсний',
				},
			});
			return;
		}

		if (teacher.trim().length === 0) {
			res.status(400).json({
				error: {
					message: 'Введіть коректний запит',
				},
			});
			return;
		}

		const messages = isFirstMessage
			? [
				{ role: 'system', content: 'Ви - користувач' },
				{
					role: 'user',
					content: `Будь як вчилель англійської мови, розмовляй тільки на теми що стосуються англійської, якщо будуть інші питання, відповідай "Я - твій віртуальний вчитель, і відповідаю на питання тільки які стосуються англійськох мови". Допоможи мені розібратися з темою "${teacher}", на це повідомлення відповіси "Я Mystic Teacher, і готовий допомогти тобі з темою "${teacher}""`,
				},
			]
			: [
				{ role: 'user', content: teacher },
			];

		const completion = await openai.createChatCompletion({
			model: 'gpt-3.5-turbo',
			messages: messages,
			temperature: 0.8,
		});

		isFirstMessage = false;

		console.log(completion);

		res.status(200).json(completion.data);
	} catch (error) {
		if (error.response) {
			console.error(error.response.status, error.response.data);
			res.status(error.response.status).json(error.response.data);
		} else {
			console.error(`Error with OpenAI API request: ${error.message}`);
			res.status(500).json({
				error: {
					message: 'An error occurred during your request.',
				},
			});
		}
	}
});

app.listen(port, () => {
	console.log(`Сервер працює на порту ${port}`);
});