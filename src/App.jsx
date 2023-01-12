import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import KakaoLogin from './pages/KakaoLogin';
import Select from './pages/Select';
import Message from './pages/Message';
import IntroPage from './pages/IntroPage';
import SubmitPage from './pages/SubmitPage';
import MainPage from './pages/MainPage';
import MyLoginPage from './pages/MyLoginPage';
import Result from './pages/Result';
import Notfoundpage from './pages/NotFoundPage';
import RequireAuth from './pages/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';

const App = () => {
  return (
    <>
      <CommonToastContainerStyled
        position='bottom-center'
        limit={1}
        closeButton={false}
        autoClose={3000}
        hideProgressBar
      />
      <Routes>
        <Route path='/' element={<RequireAuth />}>
          <Route path='' element={<MainPage />} />
          <Route path='submit' element={<SubmitPage />} />
          <Route path='result' element={<Result />} />
        </Route>
        <Route path='select/:friendKey' element={<Select />} />
        <Route path='message/:friendKey' element={<Message />} />
        <Route path='flogin' element={<LoginPage />} />
        <Route path='intro/:friendKey' element={<IntroPage />} />
        <Route path='oauth' element={<KakaoLogin />} />
        <Route path='login' element={<MyLoginPage />} />
        <Route path='/*' element={<Notfoundpage />} />
      </Routes>
    </>
  );
};

export default App;

const CommonToastContainerStyled = styled(ToastContainer)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: 400;
  font-size: 20px;
  .Toastify__toast {
    font-family: 'GangwonEdu_OTFBoldA';
    width: 342px;
    height: 68px;
    padding: 20px;
    border-radius: 20px;
    background-color: ${(props) => props.theme.colors.beige};
    color: ${(props) => props.theme.colors.brown};
  }
`;
