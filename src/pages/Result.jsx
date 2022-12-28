import React from 'react';
import { ReactComponent as Arrow } from '../asset/arrow.svg';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { data } from '../data/resultData';
import Complete from '../components/Complete';
import ProgressBar from '../components/progressbar';

const Result = () => {
  let readings = [
    {
      name: '떡',
      value: 10,
      color: '#FFFFFF',
    },
    {
      name: '파',
      value: 30,
      color: '#8CC638',
    },
    {
      name: '김',
      value: 10,
      color: '#4C4B4A',
    },
    {
      name: '고기',
      value: 10,
      color: '#84604A',
    },
    {
      name: '계란',
      value: 10,
      color: '#FFCA43',
    },
    {
      name: '물',
      value: 20,
      color: '#B4DCE9',
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
        {data.map((data, index) => (
          <Complete
            key={index}
            source={data.img}
            color={data.color}
            title={data.title}
            text={data.text}
            ingredient={data.ingredient}
          />
        ))}
      </ResultContainer>
      <ProgressBar readings={readings} height={20} />
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
  margin-top: 49px;
  margin-left: 33px;
`;
const ResultContainer = styled.div`
  width: 390px;
`;

export default Result;
