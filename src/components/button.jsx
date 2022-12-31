import styled from 'styled-components';
import quemark from '../asset/quemark.svg';

export const IngredientButton = styled.button`
  width: 96px;
  height: 42px;
  border-radius: 24px;
  font-size: 16px;
  font-family: 'GangwonEdu_OTFBoldA';
  color: ${(props) => props.color || '#ffffff'};
  background: ${(props) => props.backgroundcolor || props.theme.colors.beige};
`;
export const LongButton = styled.button`
  width: 236px;
  height: 52px;
  border-radius: 27px;
  background: ${(props) => props.theme.colors.ivory};
  font-size: 24px;
  color: ${(props) => props.theme.colors.brown};
  box-shadow: 0px 2px 6px rgba(29, 29, 29, 0.25);
  cursor: pointer;
`;

export const ConfirmButton = styled.button`
  border: 1px solid ${(props) => props.theme.colors.brown};
  border-radius: 24px;
  width: 96px;
  height: 42px;
  background-color: rgba(0, 0, 0, 0);
  color: ${(props) => props.theme.colors.brown};
`;

export const QuestionButton = styled.img`
  src: url(${quemark});
`;
