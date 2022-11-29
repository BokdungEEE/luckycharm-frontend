import React from 'react';
import { useLocation } from 'react-router-dom';
const Message = () => {
  const navigate = useLocation();
  const ingredient = navigate.state.text;
  return <div>{ingredient}</div>;
};

export default Message;
