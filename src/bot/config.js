import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
  initialMessages: [
    createChatBotMessage(`Hello, Welcome to student info system!`, {
      withAvatar: true,
      delay: 2000,
      widget: 'gotItButton',
    }),
  ],
  widgets: [
    {
      widgetName: 'gotItButton',
      widgetFunc: (props) => {
        console.log(props.actionProvider.gotItClicked);
        if (!props.actionProvider.gotItClicked) {
          return (
            <button className="got-it-button" onClick={props.actionProvider.handleGotIt}>
              Got it!
            </button>
          );
        } else {
          return null; // Don't render the button if it's already clicked
        }
      },
    },
  ],
};

export default config;
