import React from 'react';
import styled from 'styled-components';

import { ToDoListProvider } from 'Context';
import { Route, Routes } from 'react-router-dom';
import { List, Add, Detail, NotFound } from 'Pages';
import { PageHeader } from 'Components';

function App() {
  return (
    <ToDoListProvider>
      <Container>
        <PageHeader />
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/add" element={<Add />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Container>
    </ToDoListProvider>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  background-color: #eee;
`;

export default App;
