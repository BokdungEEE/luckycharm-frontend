import React from 'react';
import styled from 'styled-components';

const ProgressBar = ({ readings, height }) => {
  const samples = Object.entries(readings);
  const values = Object.values(readings);
  let total = values.reduce((prev, curr) => prev + curr, 0);

  let bars = samples.map(function ([key, value], i) {
    if (value > 0) {
      if (key == 'rice') {
        return (
          <Bar
            style={{
              backgroundColor: '#FFFFFF',
              height: height,
              width: (value * 342) / total,
            }}
            key={i}
          />
        );
      }
      if (key == 'greenOnion') {
        return (
          <Bar
            style={{
              backgroundColor: '#8cc638',
              height: height,
              width: (value * 342) / total,
            }}
            key={i}
          />
        );
      }
      if (key == 'seaWeed') {
        return (
          <Bar
            style={{
              backgroundColor: '#4c4b4a',
              height: height,
              width: (value * 342) / total,
            }}
            key={i}
          />
        );
      }
      if (key == 'meat') {
        return (
          <Bar
            style={{
              backgroundColor: '#84604a',
              height: height,
              width: (value * 342) / total,
            }}
            key={i}
          />
        );
      }
      if (key == 'egg') {
        return (
          <Bar
            style={{
              backgroundColor: '#ffca43',
              height: height,
              width: (value * 342) / total,
            }}
            key={i}
          />
        );
      }
      if (key == 'water') {
        return (
          <Bar
            style={{
              backgroundColor: '#b4dce9',
              height: height,
              width: (value * 342) / total,
            }}
            key={i}
          />
        );
      }
    }
  });
  return (
    <div>
      <Progress>{bars == '' ? '' : bars}</Progress>
    </div>
  );
};

const Bar = styled.div`
  float: left;
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
