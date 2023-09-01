## Mystic Teacher

## Demonstration:

FOR EASIER VIEWING AND BETTER PERCEPTION, OPEN THE GIF IN FULL SCREEN.

![Gif](https://github.com/KIBINNANEKO/react-english-helper-openai/blob/main/frontend/src/assets/demonstration.gif)

HOW IT SHOULD WORK:
1. Select a topic from the list.
2. Click on the chosen topic.
3.  A dialogue with the model will begin, providing the fundamentals of that topic and several examples.
4.  Continue the dialogue based on what you understand and what you don't.

DISCLAIMER: The application does not provide practical value, as one can simply use Chat GPT. It was created for educational purposes. The development cost was 94 cents, spent to cover the expenses of Chat GPT API requests. (https://platform.openai.com/overview)

"Mystic Teacher" - my own mini-project aimed at developing an interface that will interact with the Chat GPT model to assist in learning the English language.

Development stages:

1. Create the design project in Figma;
2. Implement three pages (welcome, topic selection, dialogue) and components, and set up the interaction with React;
3. Create a simple Node.js server and connect the Chat GPT model, configure prompts, and interaction methods using the openai library.

Features:
1. There was no need for using a state manager;
2. Please be lenient when judging the code quality on the server-side since my specialization is frontend development, and I couldn't implement my idea without the server.

Future plans for additions:
1. Animations;
2. Ability to save dialogues for reviewing the material;
3. Generate possible response options after each message and display them as tags, clicking on which would send the message to the model;
4. Implement light/dark themes;
5. Add error handling and notify the user about them.

Technology stack:
1. HTML, SCSS-modules;
2. JavaScript;
3. React;
4. Node.js + openai library;
5. Figma (design).
