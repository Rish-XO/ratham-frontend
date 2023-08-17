import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleGotIt = () => {
    const userMessage = 'Got it!'; // The user's response

    // Add the user's response to the messages
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, userMessage],
    }));

    // Now add the bot's response asking for the name
    const namePrompt = createChatBotMessage('Enter your Name');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, namePrompt],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleGotIt,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
