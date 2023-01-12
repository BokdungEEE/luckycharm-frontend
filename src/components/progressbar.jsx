import React from 'react';
import styled from 'styled-components';

const ProgressBar = ({ readings, height, setIsOpen }) => {
  const samples = Object.entries(readings);
  const values = Object.values(readings);
  let total = values.reduce((prev, curr) => prev + curr, 0);
  return (
    <div onClick={() => setIsOpen(true)}>
      {samples.map(function ([key, value], i) {
        if (value > 0) {
          return (
            <Bar
              name={key}
              style={{
                height,
                width: (value * 342) / total,
              }}
              key={i}
            />
          );
        }
      })}
    </div>
  );
};

const Bar = styled.div`
  float: left;
  margin-bottom: 42px;
  cursor: pointer;

  &:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  &:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  background-color: ${(props) => props.theme.colors[props.name]};
`;

export default ProgressBar;
