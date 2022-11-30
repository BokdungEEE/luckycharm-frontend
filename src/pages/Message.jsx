import React from 'react';
import { useLocation } from 'react-router-dom';
const Message = () => {
  const navigate = useLocation();
  const { img, text } = navigate.state.selected;
  return <div>{text}</div>;
};

export default Message;
