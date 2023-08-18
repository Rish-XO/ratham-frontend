import React, { useState } from "react";
import { createClientMessage } from "react-chatbot-kit";
import { useDispatch } from "react-redux";
import { nameAdder } from "../store/chatSlice";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const [gotItClicked, setGotItClicked] = useState(false);
  const [waitingForName, setWaitingForName] = useState(false);
  const dispatch = useDispatch();

  const handleGotIt = () => {
    const userMessage = createClientMessage("Got it.");
    // Add the user's response to the messages
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, userMessage],
    }));

    // Now add the bot's response asking for the name
    const namePrompt = createChatBotMessage("Enter your Name");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, namePrompt],
    }));

    setGotItClicked(true);
    setWaitingForName(true);
  };

  const handleName = (name) => {
    dispatch(nameAdder(name));
    const agePrompt = createChatBotMessage("Select your age");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, agePrompt],
    }));

    setWaitingForName(false);
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleGotIt,
            handleName,
            gotItClicked: gotItClicked,
            waitingForName,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
