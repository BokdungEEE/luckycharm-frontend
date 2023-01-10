import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyle';
import LoginPage from './pages/LoginPage';
import KakaoLogin from './pages/KakaoLogin';
import Select from './pages/Select';
import Message from './pages/Message';
import IntroPage from './pages/IntroPage';
import SubmitPage from './pages/SubmitPage';
import MainPage from './pages/MainPage';
import './styles/GlobalFont.css';
import MyLoginPage from './pages/MyLoginPage';
import Result from './pages/Result';
import Notfoundpage from './pages/NotFoundPage';
import RequireAuth from './pages/RequireAuth';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<RequireAuth />}>
          <Route path='' element={<MainPage />} />

          <Route path='submit' element={<SubmitPage />} />
          <Route path='result' element={<Result />} />
        </Route>
        <Route path='select' element={<Select />} />
        <Route path='message' element={<Message />} />
        <Route path='flogin' element={<LoginPage />} />

        <Route path='intro/:frinedKey' element={<IntroPage />} />
        <Route path='oauth' element={<KakaoLogin />} />
        <Route path='login' element={<MyLoginPage />} />
        <Route path='/*' element={<Notfoundpage />} />
      </Routes>
    </>
  );
};

export default App;
