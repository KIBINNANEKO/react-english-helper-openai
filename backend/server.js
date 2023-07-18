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
	apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(openaiConfiguration);

let isFirstMessage = true;
let messages = [];

///////////////////////////////////////////////////////////////////////////////////////

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

		isFirstMessage
			? messages.push(
				{
					role: 'user',
					content: `Будь як вчилель англійської мови, розмовляй тільки на українській мові (я не розумію російську) тільки на теми що стосуються англійської. Допоможи мені розібратися з темою "${teacher}" (в англійській мові), на це повідомлення відповіси "Я Mystic Teacher, і готовий допомогти тобі з темою "${teacher}"". А далі розкажи основи та кілька прикладів використання. Після кожного твого повідомлення, враховуючи це, передай 3 можлививих запитання у вигляді js масиву, які допоможуть краще зрозуміти тему, і більше нічого зайвого.`
				})
			: messages.push(
				{ role: 'user', content: teacher }
				);

		const completion = await openai.createChatCompletion({
			model: 'gpt-3.5-turbo',
			messages: messages,
			temperature: 0.8,
		});

		isFirstMessage = false;

		messages.push(completion.data.choices[0].message)

		res.status(200).json(completion.data);

	} catch (error) {
		if (error.response && error.response.data.error.code === 'context_length_exceeded') {
			messages = messages.slice(0, 1);
			messages.push(
				{ role: 'user', content: teacher }
			);
			const completion = await openai.createChatCompletion({
				model: 'gpt-3.5-turbo',
				messages: messages,
				temperature: 0.8,
			});

			isFirstMessage = false;

			messages.push(completion.data.choices[0].message)

			res.status(200).json(completion.data);

			console.log('Ahaahha' + messages);
		} else if (error.response) {
			console.error(error.response.status, error.response.data);
			res.status(error.response.status).json(error.response.data);
		} else {
			console.error('Unhandled error:', error);
		}
	}
});

app.listen(port, () => {
	console.log(`Сервер працює на порту ${port}`);
});