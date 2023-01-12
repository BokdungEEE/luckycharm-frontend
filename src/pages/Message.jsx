import React, { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { ReactComponent as Arrow } from '../asset/arrow.svg';
import styled from 'styled-components';
import { LongButton } from '../components/button';
import { sendMessage } from '../api/message';
import { SelectedIngredientImgKey } from '../consts/LocalStorageKey';
import { useEffect } from 'react';
import Notfoundpage from './NotFoundPage';

const Message = () => {
  const [selectedData, setSelectedData] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');
  const [content, setContent] = useState('');
  const { friendKey } = useParams();

  useEffect(() => {
    if (location.state) setSelectedData(location.state.selectedData);
  }, []);

  const handleNickName = (e) => {
    setNickname(e.target.value);
  };
  const handleContent = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = () => {
    const submitObj = {
      ingredient: selectedData.text,
      nickName: nickname,
      content,
    };
    localStorage.setItem(SelectedIngredientImgKey, selectedData.img);
    sendMessage(submitObj, friendKey);
    navigate('/submit');
  };
  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      {selectedData ? (
        <Container>
          <ArrowImg onClick={goBack} />
          <Text>
            친구에게 보낼
            <br />
            메시지를 입력해주세요
          </Text>
          <StyledImg src={selectedData.img} />
          <NicknameContainer>
            <WordsCount>{nickname.length}/20</WordsCount>
            <NicknameInput
              onChange={handleNickName}
              type='text'
              maxLength={20}
            ></NicknameInput>
            <StyledPlaceholder>보내는 사람 :</StyledPlaceholder>
          </NicknameContainer>
          <ContentContainer>
            <ContentInput onChange={handleContent} maxLength={200} />
            <WordsCount>{content.length}/200</WordsCount>
          </ContentContainer>
          <LongButton onClick={handleSubmit} disabled={!(nickname && content)}>
            친구에게 보내기
          </LongButton>
        </Container>
      ) : (
        <Notfoundpage />
      )}
    </>
  );
};

export default Message;

const Container = styled.div`
  margin: 0 auto;
  padding: 50px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 390px;
  height: 844px;
  background-color: #947e5e;
`;
const Text = styled.p`
  align-self: flex-start;
  color: #eeecdd;
  line-height: 26px;
  margin-bottom: 44px;
`;
const ArrowImg = styled(Arrow)`
  align-self: flex-start;
  margin-bottom: 15px;
`;
const StyledImg = styled.img`
  margin-bottom: 8px;
`;
const NicknameContainer = styled.div`
  width: 342px;
  height: 52px;
  padding: 6px 8px;
  background: #eeecdd;
  border-radius: 30px;
  margin-bottom: 12px;
  position: relative;
`;
const NicknameInput = styled.input`
  border: none;
  width: 100%;
  height: 100%;
  background: #eeecdd;
  padding-left: 106px;
  padding-top: 5px;
  resize: none;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='26' ry='26' stroke='%23947E5EFF' stroke-width='2' stroke-dasharray='5%2c10' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e");
  border-radius: 30px;
  position: relative;
  :focus {
    outline: none;
  }
  font: inherit;
`;
const ContentContainer = styled.div`
  width: 342px;
  height: 282px;
  background: #eeecdd;
  border-radius: 30px;
  padding: 6px 8px;
  margin-bottom: 40px;
  position: relative;
`;
const ContentInput = styled.textarea`
  width: 100%;
  height: 100%;
  background: #eeecdd;
  border: none;
  resize: none;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='26' ry='26' stroke='%23947E5EFF' stroke-width='2' stroke-dasharray='5%2c10' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e");
  border-radius: 26px;
  padding: 20px 23px 34px 22px;
  :focus {
    outline: none;
  }
  font: inherit;
`;

const WordsCount = styled.p`
  font-size: 15px;
  color: ${(props) => props.theme.colors.brown};
  position: absolute;
  :nth-child(1) {
    z-index: 2;
    right: 27px;
    bottom: 15px;
  }
  :nth-child(2) {
    bottom: 18px;
    right: 27px;
  }
`;
const StyledPlaceholder = styled.p`
  position: absolute;
  z-index: 2;
  color: ${(props) => props.theme.colors.brown};
  left: 22px;
  top: 20px;
`;
