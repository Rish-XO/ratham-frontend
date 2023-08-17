import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (response) => {
    if (response === 'Got it!') {
      actions.handleGotIt();
    } else if (response === 'Enter your Name') {
      // Handle user response for "Enter your Name"
      // For example, actions.askForName();
      // Replace the above line with your actual implementation
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
