import React from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (response) => {
    if (actions.waitingForName === true) {
      // Handle user response for "Enter your Name"
      actions.handleName(response);
    } else {
      // Handle other user responses here
      // For example, ask for age or other information
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
