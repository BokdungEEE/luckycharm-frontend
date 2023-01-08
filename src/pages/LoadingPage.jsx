import React from 'react';
import { Container } from './NotFoundPage';
import LoadingLottie from '../asset/LoadingLottie.json';
import Lottie from 'lottie-react';

const LoadingPage = () => {
  return (
    <Container>
      <Lottie animationData={LoadingLottie} />
    </Container>
  );
};

export default LoadingPage;
