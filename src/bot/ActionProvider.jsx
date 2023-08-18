import React, { useState } from 'react';
import { createClientMessage } from 'react-chatbot-kit';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const [gotItClicked, setGotItClicked] = useState(false)
  const handleGotIt = () => {
    const userMessage = createClientMessage("Got it.")
    // Add the user's response to the messages
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages,userMessage],
    })); 
  
    //remove the got it button 
    
    // Now add the bot's response asking for the name
    const namePrompt = createChatBotMessage('Enter your Name');
    
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, namePrompt],
    }));
    
    setGotItClicked(true)
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleGotIt,
            gotItClicked : gotItClicked,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
