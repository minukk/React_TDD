import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ToDoList } from 'Components';

export const List = () => {
  return (
    <Container>
      <ToDoList />
      <AddButton to="/add">+</AddButton>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;

const AddButton = styled(Link)`
  position: absolute;
  bottom: -30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: #304ffe;
  font-size: 20px;
  color: #fff;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: #1e40ff;
  }

  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;
