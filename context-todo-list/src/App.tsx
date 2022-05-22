import React from 'react';
import styled from 'styled-components';
import { ToDoList, InputContainer } from 'Components';
import { ToDoListProvider } from 'Context';

function App() {
  return (
    <ToDoListProvider>
      <Container>
        <Contents>
          <ToDoList />
          <InputContainer />
        </Contents>
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
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;

export default App;
