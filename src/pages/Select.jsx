import React, { useState } from 'react';
import { ReactComponent as Arrow } from '../asset/arrow.svg';
import { data } from '../data/selectData';
import Ingredient from '../components/Ingredient';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { LongButton } from '../components/button';
import { useEffect } from 'react';

const Select = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState('');
  const [selectedData, setData] = useState({});
  useEffect(() => {
    const select = data.filter((ingredient) => selected == ingredient.id)[0];
    setData(select);
  }, [selected]);
  const onSelect = () => {
    navigate('/message', { state: { selectedData } });
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
        {data.map((ingredient) => (
          <Ingredient
            key={ingredient.id}
            id={ingredient.id}
            source={ingredient.img}
            color={ingredient.color}
            bgcolor={ingredient.bgcolor}
            text={ingredient.text}
            setSelected={setSelected}
            selected={selected}
          />
        ))}
      </SelectContainer>
      <SelectButton
        onClick={onSelect}
        isselected={selected}
        disabled={!selected}
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
  margin: 0 auto;
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
  color: ${(props) =>
    props.isselected ? props.theme.colors.brown : props.theme.colors.beige};
  opacity: ${(props) => (!props.isselected ? 0.6 : 1)};
  border: none;
`;

export default Select;
