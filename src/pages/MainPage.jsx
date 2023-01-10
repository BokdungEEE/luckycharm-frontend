import React from 'react';
import AfterMyPage from './AfterMyPage';
import BeforeMyPage from './BeforeMyPage';
import server from '../api/service';
import { useState } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';

const MainPage = () => {
  const [data, setData] = useState({});

  const RoadMainPages = useCallback(async () => {
    const { data } = await server.beforeRoadMyPage();
    setData(data.data);
  }, []);

  useEffect(() => {
    RoadMainPages();
  }, [RoadMainPages]);

  if (data.before) return <BeforeMyPage />;
  return <AfterMyPage />;
};

export default MainPage;
