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

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route path='/flogin' element={<LoginPage />} />
        <Route path='/intro/:frinedKey' element={<IntroPage />} />
        <Route path='/oauth' element={<KakaoLogin />} />
        <Route path='/select' element={<Select />} />
        <Route path='/message' element={<Message />} />
        <Route path='/submit' element={<SubmitPage />} />
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<MyLoginPage />} />
        <Route path='/result' element={<Result />} />
        <Route path='/*' element={<Notfoundpage />} />
      </Routes>
    </div>
  );
};

export default App;
