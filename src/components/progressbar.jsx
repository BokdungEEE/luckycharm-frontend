import React, { Component } from 'react';
import styled from 'styled-components';

class ProgressBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const parent = this.props;

    let bars =
      parent.readings &&
      parent.readings.length &&
      parent.readings.map(function (item, i) {
        if (item.value > 0) {
          return (
            <Bar
              style={{
                backgroundColor: item.color,
                height: parent.height,
                width: (342 * item.value) / 90,
              }}
              key={i}
            />
          );
        }
      }, this);
    return <Progress>{bars == '' ? '' : bars}</Progress>;
  }
}

const Bar = styled.div`
  float: left;
`;

const Progress = styled.div`
  div {
    &:first-of-type {
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
