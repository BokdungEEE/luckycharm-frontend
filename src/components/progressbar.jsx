import React from 'react';
import styled from 'styled-components';

const ProgressBar = ({ readings, height }) => {
  const samples = Object.entries(readings);
  const values = Object.values(readings);
  let total = values.reduce((prev, curr) => prev + curr, 0);
  let bars = samples.map(function ([key, value], i) {
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
  });
  return (
    <div>
      <Progress>{bars === '' ? '' : bars}</Progress>
    </div>
  );
};

const Bar = styled.div`
  float: left;
  background-color: ${(props) => props.theme.colors[props.name]};
`;

const Progress = styled.div`
  div {
    margin-bottom: 42px;
    &:first-child {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }
    &:last-child {
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }
`;

export default ProgressBar;
