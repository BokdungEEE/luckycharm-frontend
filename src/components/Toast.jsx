import { useEffect } from 'react';
import styled from 'styled-components';
import React from 'react';

const Toast = ({ setToast, text }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setToast(false);
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [setToast]);

  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  );
};
export default Toast;

const Container = styled.div`
  width: 342px;
  height: 68px;
  border-radius: 20px;
  background-color: #d0cdb5;
  align-items: center;
  position: absolute;
  justify-content: center;
  display: flex;
`;

const Text = styled.p`
  color: #947e5e;
  font-weight: 400;
  font-size: 20px;
`;
