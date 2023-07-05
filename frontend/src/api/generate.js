import { Configuration, OpenAIApi } from "openai";


const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const isFirstMessage = true;

export default async function (req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "API ключ не дійсний",
      }
    });
    return;
  }
  const teacher = req.body.teacher || '';
  if (teacher.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Введіть коректний запит",
      }
    });
    return;
  }

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: isFirstMessage ? [{ 'role': 'user', 'content': `Будь як вчилель англійської мови, розмовляй тільки на теми що стосуються англійської, якщо будуть інші питання, відповідай "Я - твій віртуальний вчитель, і відповідаю на питання тільки які стосуються англійськох мови". Допоможи мені розібратися з темою "${teacher}", на це повідомлення відповіси "Я Mystic Teacher, і готовий допомогти тобі з темою "${teacher}""` }] : [{ 'role': 'user', 'content': teacher }],
      temperature: 0.1,
    });
    isFirstMessage = false
    console.log(res.status(200).json(completion.data)); 

  } catch(error) {
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }
}

