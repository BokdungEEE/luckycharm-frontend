import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyle';
import IntroPage from './pages/IntroPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import KakaoLogin from './pages/KakaoLogin';
import Select from './pages/Select';
import Message from './pages/Message';
import IntroPage from './pages/IntroPage';

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
        <Route path='/intro' element={<IntroPage />} />
      </Routes>
    </div>
  );
};

export default App;
