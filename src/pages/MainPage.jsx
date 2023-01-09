import React, { useState } from 'react';
import styled from 'styled-components';
import Rabbit from '../components/MainRabbit';
import background from '../asset/texture.svg';
import { LongButton } from '../components/button';
import img from '../asset/boul.svg';
import BoulCount from '../components/BoulCount';
import DescriptionModal from '../components/DescriptionModal';
import server from '../api/service';
import { useCallback } from 'react';
import { useEffect } from 'react';
import Toast from '../components/Toast';

const MainPage = () => {
  const [toast, setToast] = useState(false);
  const [data, setData] = useState({});

  const beforeRoadMyPages = useCallback(async () => {
    const { data } = await server.beforeRoadMyPage();
    console.log(data);
    setData(data.data);
  }, []);

  useEffect(() => {
    beforeRoadMyPages();
  }, [beforeRoadMyPages]);

  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const copyUrl = async () => {
    await navigator.clipboard.writeText(data.myLink);
    setToast(true);
  };
  return (
    <Container>
      {isOpen && <DescriptionModal closeModal={closeModal} isLogin={false} />}
      <TextWrapper>
        <Title>HAPPY NEW YEAR!</Title>
        <SmallGray>
          친구들에게 받은 떡국 재료와 메시지는
          <br />
          설날<SmallBrown>(2022.01.21)</SmallBrown>부터 확인할 수 있어요
        </SmallGray>
      </TextWrapper>
      <CountBowl>
        <BoulCount cnt={data.plateCnt || 0} openModal={openModal} />
      </CountBowl>
      <Rabbit emotion='smile' />
      <IngredientWrapper>
        <SmallWhite>받은 재료</SmallWhite>
        <img src={img} alt='boul' />
        <TitlePurple>{data.ingredientCnt || 0}개</TitlePurple>
      </IngredientWrapper>
      <ButtonWrapper>
        <ShareButton type='button' onClick={copyUrl}>
          링크 공유하기
        </ShareButton>
        {toast && <Toast setToast={setToast} text='URL이 복사되었습니다.' />}
      </ButtonWrapper>
    </Container>
  );
};
export default MainPage;

const Container = styled.div`
  margin: 0 auto;
  height: 844px;
  width: 390px;
  background-image: url('${background}');
  background-blend-mode: multiply;
  background-color: ${({ theme }) => theme.colors.ivory};
  position: relative;
`;

const Title = styled.h1`
  margin-top: 80px;
  font-size: 32px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.purple};
  margin-bottom: 18px;
`;

const SmallGray = styled.h2`
  position: relative;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.gray};
`;

const SmallBrown = styled.span`
  position: relative;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.brown};
`;

const TextWrapper = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
`;

const ButtonWrapper = styled.div`
  left: 50%;
  transform: translate(-50%);
  position: absolute;
  bottom: 60px;
  justify-content: center;
  cursor: pointer !important;
  display: flex;
`;

const IngredientWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  bottom: 140px;
  width: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CountBowl = styled.div`
  position: absolute;
  margin-left: 200px;
  margin-top: 80px;
`;

const SmallWhite = styled.p`
  font-weight: 400;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.ivory};
  margin-bottom: 5px;
`;

const TitlePurple = styled.h2`
  font-weight: 400;
  font-size: 28px;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.purple};
  position: absolute;
  margin-top: 44px;
`;

const ShareButton = styled(LongButton)`
  background-color: ${({ theme }) => theme.colors.purple};
  color: ${({ theme }) => theme.colors.white}; ;
`;
