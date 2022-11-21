import React from 'react';
import { Route, Routes } from 'react-router-dom';

import MainPage from './routes/mainPage';
import LoginPage from './routes/loginPage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/' element={<MainPage />} />
      </Routes>
    </div>
  );
};

export default App;
