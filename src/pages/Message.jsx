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
      <Text>
        친구에게 보낼
        <br />
        메시지를 입력해주세요
      </Text>
      <img src={img} />
      <NicknameContainer>
        <NicknameInput
          onChange={handleNickName}
          type='text'
          placeholder='보내는 사람'
        ></NicknameInput>
      </NicknameContainer>
      <ContentContainer>
        <ContentInput onChange={handleContent} />
      </ContentContainer>
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
`;
const Text = styled.p`
  align-self: flex-start;
  color: #eeecdd;
`;
const ArrowImg = styled(Arrow)`
  align-self: flex-start;
`;
const NicknameContainer = styled.div`
  width: 320px;
  height: 52px;
  padding: 6px 8px;
  background: #eeecdd;
  border-radius: 30px;
`;
const NicknameInput = styled.input`
  border: none;
  width: 100%;
  height: 100%;
  background: #eeecdd;

  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='26' ry='26' stroke='%23947E5EFF' stroke-width='2' stroke-dasharray='5%2c10' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e");

  border-radius: 30px;
`;
const ContentContainer = styled.div`
  width: 320px;
  height: 282px;
  background: #eeecdd;
  border-radius: 30px;
  padding: 6px 8px;
`;
const ContentInput = styled.textarea`
  width: 100%;
  height: 100%;
  background: #eeecdd;
  border: none;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='26' ry='26' stroke='%23947E5EFF' stroke-width='2' stroke-dasharray='5%2c10' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e");
  border-radius: 26px;
`;
const SendButton = styled.button`
  width: 236px;
  height: 52px;
  background: #eeecdd;
  border-radius: 27px;
`;
