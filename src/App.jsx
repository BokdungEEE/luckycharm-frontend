import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyle';
import MainPage from './pages/mainPage.jsx';
import LoginPage from './pages/loginPage.jsx';
import KakaoLogin from './pages/KakaoLogin';
import Select from './pages/Select';
import Message from './pages/Message';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/' element={<MainPage />} />
        <Route path='/oauth' element={<KakaoLogin />} />
        <Route path='/select' element={<Select />} />
        <Route path='/message' element={<Message />} />
      </Routes>
    </div>
  );
};

export default App;
