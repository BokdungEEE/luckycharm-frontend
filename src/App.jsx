import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyle';
import MainPage from './pages/mainPage.jsx';
import LoginPage from './pages/loginPage.jsx';
import KakaoLogin from './pages/KakaoLogin';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/' element={<MainPage />} />
        <Route path='/oauth' element={<KakaoLogin />} />
      </Routes>
    </div>
  );
};

export default App;
