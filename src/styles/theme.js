// import React from 'react';
import styled from 'styled-components';

export const IngredientButton = styled.div`
  display: flex;
  width: 96px;
  height: 42px;
  border-radius: 24px;
  font-size: 16px;
  color: #ffffff;
  font-weight: 400;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.backgroundcolor || '#d0cdb5'};
`;
export const LongButton = styled.div`
  display: flex;
  width: 236px;
  height: 52px;
  border-radius: 27px;
  background: #eeecdd;
  font-weight: 400;
  font-size: 24px;
  color: #947e5e;
  align-items: center;
  justify-content: center;
  // &:hover {
  //   background: #ffffff;
  // }
  box-shadow: 0px 2px 6px rgba(29, 29, 29, 0.25);
`;

// export function StyledButton({ children, backgroundcolor }) {
//   return (
//     <IngredientButton background={backgroundcolor}>{children}</IngredientButton>
//   );
// }

export const defaultTheme = {
  colors: '#947E5E',
};
