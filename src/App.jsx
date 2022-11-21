import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyle';
import MainPage from './routes/mainPage.jsx';
import LoginPage from './routes/loginPage.jsx';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/' element={<MainPage />} />
      </Routes>
    </div>
  );
};

export default App;
