import React from 'react';
import { ReactComponent as Arrow } from '../asset/arrow.svg';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Soup from '../components/Soup';
import ProgressBar from '../components/progressbar';
import Received from '../components/received';
import ReceivedEgg from '../asset/receivedegg.svg';
import ReceivedGreenonion from '../asset/receivedgreenonion.svg';
import ReceivedMeat from '../asset/receivedmeat.svg';
import ReceivedRice from '../asset/receivedricecake.svg';
import ReceivedWater from '../asset/receivedwater.svg';
import ReceivedSeaweed from '../asset/receivedseaweed.svg';
import { defaultTheme } from '../styles/theme';

const Result = () => {
  let readings = [
    {
      rice: 30,
      green_onion: 30,
      sea_weed: 30,
      meat: 30,
      egg: 30,
      water: 30,
    },
  ];
  const sample = [
    {
      ingredient: 'rice',
      nickname: '김땡땡',
      message: '새복많',
    },
    {
      ingredient: 'egg',
      nickname: '가나다라마바사아자차카',
      message: '새복많',
    },
    {
      ingredient: 'water',
      nickname: 'water',
      message: '새복많',
    },
    {
      ingredient: 'meat',
      nickname: '김땡땡',
      message: '새복많',
    },
    {
      ingredient: 'sea_weed',
      nickname: '박땡땡',
      message: '새복많',
    },
  ];

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <Container>
      <ArrowImg onClick={goBack} />
      <ResultContainer>
        <Soup readings={readings} />
      </ResultContainer>
      <ProgressBar readings={readings} height={20} />
      <ReceivedIngredient>
        {sample.map((data, index) => {
          if (data.ingredient == 'egg') {
            return (
              <Received
                key={index}
                source={ReceivedEgg}
                color={defaultTheme.colors.egg}
                name={data.nickname}
              />
            );
          } else if (data.ingredient == 'green_onion') {
            return (
              <Received
                key={index}
                source={ReceivedGreenonion}
                color={defaultTheme.colors.greenonion}
                name={data.nickname}
              />
            );
          } else if (data.ingredient == 'meat') {
            return (
              <Received
                key={index}
                source={ReceivedMeat}
                color={defaultTheme.colors.meat}
                name={data.nickname}
              />
            );
          } else if (data.ingredient == 'rice') {
            return (
              <Received
                key={index}
                source={ReceivedRice}
                color={defaultTheme.colors.white}
                name={data.nickname}
              />
            );
          } else if (data.ingredient == 'water') {
            return (
              <Received
                key={index}
                source={ReceivedWater}
                color={defaultTheme.colors.water}
                name={data.nickname}
              />
            );
          } else if (data.ingredient == 'sea_weed') {
            return (
              <Received
                key={index}
                source={ReceivedSeaweed}
                color={defaultTheme.colors.seaweed}
                name={data.nickname}
              />
            );
          }
        })}
      </ReceivedIngredient>
    </Container>
  );
};

const Container = styled.div`
  width: 390px;
  height: 982px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #947e5e;
`;

const ArrowImg = styled(Arrow)`
  align-self: flex-start;
  /* margin-top: 49px; */
  margin-left: 33px;
`;

const ResultContainer = styled.div`
  width: 390px;
`;

const ReceivedIngredient = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default Result;
