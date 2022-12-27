import React, { useState } from 'react';
import { ReactComponent as Arrow } from '../asset/arrow.svg';
import { data } from '../data/selectData';
import Ingredient from '../components/Ingredient';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { LongButton } from '../components/button';

const Select = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState({});
  const onSelect = () => {
    navigate('/message', { state: { selected } });
  };
  const goBack = () => {
    navigate(-1);
  };
  return (
    <Container>
      <ArrowImg onClick={goBack} />
      <Text>
        친구에게 보낼
        <br />
        떡국 재료 한 가지를 선택해주세요
      </Text>
      <SelectContainer>
        {data.map((data, index) => (
          <Ingredient
            key={index + 1}
            index={index + 1}
            source={data.img}
            color={data.color}
            bgcolor={data.bgcolor}
            text={data.text}
            setSelected={setSelected}
            selected={selected}
          />
        ))}
      </SelectContainer>
      <SelectButton
        onClick={onSelect}
        isselected={selected.index}
        disabled={!selected.index}
      >
        재료선택완료
      </SelectButton>
    </Container>
  );
};
const ArrowImg = styled(Arrow)`
  align-self: flex-start;
  margin-bottom: 15px;
`;
const Container = styled.div`
  width: 390px;
  height: 884px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #947e5e;
  padding: 49px 24px 30px;
  justify-content: space-between;
`;
const Text = styled.p`
  align-self: flex-start;
  color: #eeecdd;
  line-height: 26px;
  margin-bottom: 30px;
`;
const SelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 700px;
`;
const SelectButton = styled(LongButton)`
  /* position: absolute;
  top: 848px; */
  background-color: ${(props) => (props.isselected ? '#EEECDD' : '#EEECDD')};
  color: ${(props) => (props.isselected ? '#947E5E' : '#D0CDB5')};
  opacity: ${(props) => (!props.isselected ? 0.6 : 1)};
  :active {
    color: #d0cdb5;
  }
  border: none;
  width: 236px;
  height: 52px;
  opacity: 0.6;
  border-radius: 27px;
`;

export default Select;
