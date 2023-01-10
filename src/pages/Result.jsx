import React, { useState, useEffect } from 'react';
import { ReactComponent as Arrow } from '../asset/arrow.svg';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Soup from '../components/Soup';
import ProgressBar from '../components/progressbar';
import Received from '../components/received';
import LoadingPage from './LoadingPage';
import { getProgress } from '../api/progress';
import { getReceived } from '../api/received';
import Ingredient from '../components/Ingredient';
import { data } from '../data/selectData';

const Result = () => {
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
  // const getData = getReceived();
  // console.log(getData);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    setIsLoading(true);
    const receivedData = await getReceived();
    setData(receivedData);
    setIsLoading(false);
  };
  console.log('data is', data);
  // console.log('sample is', sample);

  // let datas = data.map(function (element) {
  //   console.log('datas is', datas);
  // });
  // console.log('sample is', sample);
  // console.log(getProgress());
  return (
    <Container>
      {isLoading ? (
        <>
          <LoadingPage />
        </>
      ) : (
        <>
          <TopWrapper>
            <ArrowImg onClick={goBack} />
          </TopWrapper>
          <ResultContainer>
            <Soup />
          </ResultContainer>
          <ProgressBar height={20} />
          <ReceivedIngredient>
            <Received readings={data} />
          </ReceivedIngredient>
        </>
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
