import React from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (response) => {
    if (actions.waitingForName) {
      actions.handleName(response);
    } else if (actions.waitingForAge) {
      actions.handleAgeSelect(response);
    } else {
      // Handle other user responses here
      // For example, ask for additional information
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
