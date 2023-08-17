import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
  initialMessages: [
    createChatBotMessage(`Hello, Welcome to student info system!`, {
      withAvatar: true,
      delay: 3000,
      widget: 'gotItButton',
    }),
  ],
  widgets: [
    {
      widgetName: 'gotItButton',
      widgetFunc: (props) => (
        <button className="got-it-button" onClick={props.actionProvider.handleGotIt}>
          Got it!
        </button>
      ),
    },
  ],
};

export default config;
