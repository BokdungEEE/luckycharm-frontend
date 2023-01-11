import React, { useEffect, useState } from 'react';
import { ReactComponent as Arrow } from '../asset/arrow.svg';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Soup from '../components/Soup';
import ProgressBar from '../components/progressbar';
import Received from '../components/received';
import { getIngredients } from '../api/getIngredients';
import Notfoundpage from './NotFoundPage';
import { getReceived } from '../api/received';

const Result = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [ingredients, setIngredients] = useState({});
  const [received, setReceived] = useState({});

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    setIsLoading(true);
    const data = await getIngredients();
    const receivedData = await getReceived();
    setIngredients(data);
    setReceived(receivedData);
    setIsLoading(false);
  };

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  console.log(received);

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
      ingredient: 'seaWeed',
      nickname: '박땡땡',
      message: '새복많',
    },
    {
      ingredient: 'greenOnion',
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
            <Soup readings={ingredients} />
          </ResultContainer>
          <ProgressBar readings={ingredients} height={20} />
          <ReceivedIngredient>
            <Received readings={sample} />
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
