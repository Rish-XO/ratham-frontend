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
    {
      widgetName: "ageDropdown",
      widgetFunc: (props) => {
        console.log(props.actionProvider.waitingForAge);
        if (props.actionProvider.waitingForAge) {
          const ageOptions = Array.from({ length: 23 }, (_, index) => 18 + index);
          return (
            <select
              className="age-dropdown"
              onChange={(e) => props.actionProvider.handleAgeSelect(e.target.value)}
            >
              <option value="">Select Age</option>
              {ageOptions.map((age) => (
                <option key={age} value={age}>
                  {age}
                </option>
              ))}
            </select>
          );
        } else {
          return null;
        }
      },
    },
  ],
};

export default config;
