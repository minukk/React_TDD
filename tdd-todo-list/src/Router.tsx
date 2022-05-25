import { PageHeader } from 'Components/PageHeader';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <PageHeader />
      <Routes></Routes>
    </BrowserRouter>
  );
};

export default Router;
