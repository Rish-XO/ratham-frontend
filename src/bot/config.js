import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  initialMessages: [
    createChatBotMessage(`Hello, Welcome to student info system!`, {
      withAvatar: true,
      delay: 2000,
      widget: "gotItButton",
    }),
  ],
  widgets: [
    {
      widgetName: "gotItButton",
      widgetFunc: (props) => {
        // console.log(props.actionProvider.gotItClicked);

        return (
          !props.actionProvider.gotItClicked && (
            <button
              className="got-it-button"
              onClick={props.actionProvider.handleGotIt}
            >
              Got it!
            </button>
          )
        );
      },
    },
  ],
};

export default config;
