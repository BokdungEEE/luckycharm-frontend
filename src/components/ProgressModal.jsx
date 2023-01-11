import React from 'react';
import styled from 'styled-components';
import Egg from '../asset/egg.svg';
import GreenOnion from '../asset/greenonion.svg';
import Meat from '../asset/meat.svg';
import RiceCake from '../asset/ricecake.svg';
import Seaweed from '../asset/seaweed.svg';
import Water from '../asset/water.svg';
import ProgressBar from './progressbar';
import { useState } from 'react';
import { getIngredients } from '../api/getIngredients';
import { useCallback } from 'react';
import { useEffect } from 'react';

const ProgressModal = () => {
  const [data, setData] = useState({});

  const getIngredient = useCallback(async () => {
    const data = await getIngredients();
    //console.log(data);
    setData(data);
  }, []);

  useEffect(() => {
    getIngredient();
  }, [getIngredient]);

  return (
    <ConContainer>
      <Container>
        <ProgressWrapper>
          <ProgressBar readings={data} height={566} />
        </ProgressWrapper>
        <Background>
          <BoulWrapper>
            <Img src={RiceCake} alt='dduk' />
            <Gray>떡: 12개</Gray>
          </BoulWrapper>
          <BoulWrapper>
            <Img src={GreenOnion} alt='pa' />
            <Gray>파: 12개</Gray>
          </BoulWrapper>
          <BoulWrapper>
            <Img src={Seaweed} alt='gim' />
            <Gray>김: 12개</Gray>
          </BoulWrapper>
          <BoulWrapper>
            <Img src={Meat} alt='gogi' />
            <Gray>고기: 12개</Gray>
          </BoulWrapper>
          <BoulWrapper>
            <Img src={Egg} alt='egg' />
            <Gray>계란: 12개</Gray>
          </BoulWrapper>
          <BoulWrapper>
            <Img src={Water} alt='mul' />
            <Gray>물: 12개</Gray>
          </BoulWrapper>
        </Background>
      </Container>
    </ConContainer>
  );
};

export default ProgressModal;

const ConContainer = styled.div`
  background-color: rgba(56, 51, 43, 0.8);
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const Container = styled.div`
  width: 342px;
  height: 566px;

  //position: absolute;
`;

const Background = styled.div`
  background-color: ${({ theme }) => theme.colors.beige};
  display: flex;
  justify-content: center;
  align-content: center;
  gap: 10px;
  flex-wrap: wrap;
  width: 342px;
  height: 526px;
  z-index: 2;
  margin-top: 20px;
`;

const BoulWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Gray = styled.h2`
  font-weight: 400;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.gray};
  margin-top: 13px;
`;

const Img = styled.img`
  width: 100px;
  height: 76px;
  margin: 20px;
`;

const ProgressWrapper = styled.div`
  z-index: -50;
  position: absolute;
`;
