import React from 'react';
import { Route, Routes } from 'react-router-dom';

import MainPage from './routes/mainPage.jsx';
import LoginPage from './routes/loginPage.jsx';

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
