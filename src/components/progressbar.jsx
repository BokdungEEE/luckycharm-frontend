import React, { Component } from 'react';
import styled from 'styled-components';

class ProgressBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const parent = this.props;
    const values = Object.values(parent.readings[0]);
    let bars = values.map(function (value, i) {
      let total = values.reduce((prev, curr) => prev + curr);

      return (
        <Bar
          style={{
            height: parent.height,
            width: (value * 342) / total,
          }}
          key={i}
        />
      );
    }, this);

    return (
      <div>
        <Progress>{bars == '' ? '' : bars}</Progress>
      </div>
    );
  }
}

const Bar = styled.div`
  float: left;
`;

const Progress = styled.div`
  div {
    &:first-child {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      background-color: #ffffff;
    }
    &:nth-child(2) {
      background-color: #8cc638;
    }
    &:nth-child(3) {
      background-color: #4c4b4a;
    }
    &:nth-child(4) {
      background-color: #84604a;
    }
    &:nth-child(5) {
      background-color: #ffca43;
    }
    &:last-child {
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      background-color: #b4dce9;
    }
  }
`;

export default ProgressBar;
