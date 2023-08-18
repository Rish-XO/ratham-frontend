import React, { useState } from "react";
import { createClientMessage } from "react-chatbot-kit";
import { useDispatch } from "react-redux";
import { nameAdder, ageAdder } from "../store/chatSlice";
import { useNavigate } from "react-router-dom";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const [gotItClicked, setGotItClicked] = useState(false);
  const [waitingForName, setWaitingForName] = useState(false);
  const [waitingForAge, setWaitingForAge] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleGotIt = () => {
    const userMessage = createClientMessage("Got it.");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, userMessage],
    }));

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
    const agePrompt = createChatBotMessage("Select your age", {
      widget: "ageDropdown", // Register the ageDropdown widget
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, agePrompt],
    }));

    setWaitingForName(false);
    setWaitingForAge(true);
  };

  const handleAgeSelect = (age) => {
    const userMessage = createClientMessage(age);
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, userMessage],
    }));
    if (age) {
      dispatch(ageAdder(age));
      setWaitingForAge(false);
    }
   const botMessage = createChatBotMessage("Thank you. In 5 seconds, bot will exit")
   setState((prev) => ({
    ...prev,
    messages: [...prev.messages, botMessage],
  }));

  setTimeout(() => {
    navigate('/confirmation')
  }, 5000);
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleGotIt,
            handleName,
            handleAgeSelect,
            gotItClicked,
            waitingForName,
            waitingForAge,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
