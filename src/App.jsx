import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyle';
import LoginPage from './pages/LoginPage';
import KakaoLogin from './pages/KakaoLogin';
import Select from './pages/Select';
import Message from './pages/Message';
import IntroPage from './pages/IntroPage';
import SubmitPage from './pages/SubmitPage';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/intro' element={<IntroPage />} />
        <Route path='/oauth' element={<KakaoLogin />} />
        <Route path='/select' element={<Select />} />
        <Route path='/message' element={<Message />} />
        <Route path='/submit' element={<SubmitPage />} />
      </Routes>
    </div>
  );
};

export default App;
