import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ReactComponent as Arrow } from '../asset/arrow.svg';
import styled from 'styled-components';

const Message = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { img, ingredient } = location.state.selected;
  const [nickname, setNickname] = useState('');
  const [content, setContent] = useState('');
  const handleNickName = (e) => {
    setNickname(e.target.value);
  };
  const handleContent = (e) => {
    setContent(e.target.value);
  };
  const handleSubmit = () => {
    const submitObj = {
      ingredient,
      nickname,
      content,
    };
    console.log(submitObj);
  };
  const goBack = () => {
    navigate(-1);
  };
  return (
    <Container>
      <ArrowImg onClick={goBack} />
      <p>친구에게 보낼 메시지를 입력해주세요</p>
      <img src={img} />
      <NicknameInput onChange={handleNickName} type='text' />
      <ContentInput onChange={handleContent} />
      <SendButton onClick={handleSubmit} disabled={!(nickname && content)}>
        친구에게 보내기
      </SendButton>
    </Container>
  );
};

export default Message;

const Container = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 390px;
  height: 982px;
  background-color: #947e5e;
  justify-content: space-around;
`;

const ArrowImg = styled(Arrow)`
  align-self: flex-start;
`;
const NicknameInput = styled.input`
  width: 342px;
  height: 52px;
  background: #eeecdd;
  border-radius: 30px;
`;
const ContentInput = styled.textarea`
  width: 342px;
  height: 282px;
  background: #eeecdd;
  border-radius: 30px;
`;
const SendButton = styled.button`
  width: 236px;
  height: 52px;
  background: #eeecdd;
  border-radius: 27px;
`;
