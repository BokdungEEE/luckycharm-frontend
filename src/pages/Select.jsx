import React, { useState } from 'react';
import { ReactComponent as Arrow } from '../asset/arrow.svg';
import { data } from '../data/selectData';
import Ingredient from '../components/Ingredient';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Select = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState('');
  const onSelected = () => {
    navigate('/message', { state: { text: selected } });
  };
  console.log(selected);
  return (
    <Container>
      <ArrowImg />
      <p>친구에게 보낼 떡국 재료 한 가지를 선택해주세요</p>
      <IContainer>
        {data.map((data, index) => (
          <Ingredient
            key={index}
            source={data.img}
            color={data.color}
            text={data.text}
            setSelected={setSelected}
          />
        ))}
      </IContainer>
      <button onClick={onSelected}>재료선택완료</button>
    </Container>
  );
};
const ArrowImg = styled(Arrow)`
  align-self: flex-start;
`;
const Container = styled.div`
  width: 390px;
  height: 982px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const IContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default Select;
