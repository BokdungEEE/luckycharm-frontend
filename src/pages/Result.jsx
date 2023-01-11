import React, { useEffect, useState } from 'react';
import { ReactComponent as Arrow } from '../asset/arrow.svg';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Soup from '../components/Soup';
import ProgressBar from '../components/progressbar';
import Received from '../components/received';
import { getIngredients } from '../api/getIngredients';
import Notfoundpage from './NotFoundPage';

const Result = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [ingredients, setIngredients] = useState({});

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    setIsLoading(true);
    const data = await getIngredients();
    setIngredients(data);
    setIsLoading(false);
  };
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  let readings = [
    {
      rice: 30,
      green_onion: 30,
      sea_weed: 30,
      meat: 300,
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
      nickname: '가나다라마바사',
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
    {
      ingredient: 'green_onion',
      nickname: '박땡땡',
      message: '새복많',
    },
  ];
  return (
    <Container>
      {!isLoading && ingredients ? (
        <>
          <TopWrapper>
            <ArrowImg onClick={goBack} />
          </TopWrapper>
          <ResultContainer>
            <Soup readings={readings} />
          </ResultContainer>
          <ProgressBar readings={readings} height={20} />
          <ReceivedIngredient>
            <Received readings={readings} />
          </ReceivedIngredient>
        </>
      ) : (
        <Notfoundpage />
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 390px;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.brown};
`;

const TopWrapper = styled.div`
  position: fixed;
  background-color: ${(props) => props.theme.colors.brown};
  width: 390px;
  height: 80px;
`;
const ArrowImg = styled(Arrow)`
  margin-top: 49px;
  margin-left: 33px;
`;

const ResultContainer = styled.div`
  width: 390px;
  margin-top: 80px;
`;

const ReceivedIngredient = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default Result;
