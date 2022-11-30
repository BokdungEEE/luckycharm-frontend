import React, { useState } from 'react';
import { ReactComponent as Arrow } from '../asset/arrow.svg';
import { data } from '../data/selectData';
import Ingredient from '../components/Ingredient';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Select = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState({});
  const onSelect = () => {
    navigate('/message', { state: { selected } });
  };

  return (
    <Container>
      <ArrowImg />
      <p>친구에게 보낼 떡국 재료 한 가지를 선택해주세요</p>
      <SelectContainer>
        {data.map((data, index) => (
          <Ingredient
            key={index}
            index={index}
            source={data.img}
            color={data.color}
            text={data.text}
            setSelected={setSelected}
            selected={selected}
          />
        ))}
      </SelectContainer>
      <SelectButton onClick={onSelect} isselected={selected.index}>
        재료선택완료
      </SelectButton>
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
  background-color: #947e5e;
`;
const SelectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const SelectButton = styled.button`
  background-color: ${(props) => (props.isselected ? '#EEECDD' : '#EEECDD')};
  color: ${(props) => (props.isselected ? '#947E5E' : '#D0CDB5')};
  opacity: ${(props) => !props.isselected && 0.6};
  :active {
    color: #d0cdb5;
  }
`;

export default Select;
