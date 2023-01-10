import React from 'react';
import AfterMyPage from './AfterMyPage';
import BeforeMyPage from './BeforeMyPage';
import { IsBefore } from '../api/IsBefore';
import { useState } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import LoadingPage from './LoadingPage';

const MainPage = () => {
  const [data, setData] = useState(null);

  const RoadMainPages = useCallback(async () => {
    const data = await IsBefore();
    setData(data);
  }, []);

  useEffect(() => {
    RoadMainPages();
  }, [RoadMainPages]);

  if (!data) return <LoadingPage />;

  if (!data.data) return <BeforeMyPage />;
  return <AfterMyPage />;
};

export default MainPage;
