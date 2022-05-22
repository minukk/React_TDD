import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { ToDoListContext } from 'Context';
import { Button } from 'Components';
export const Detail = () => {
  const navigate = useNavigate();
  const params: any = useParams();
  const id = Number.parseInt(params.id);
  const { toDoList, deleteToDo } = useContext(ToDoListContext);
  const toDo = toDoList[id];

  return (
    <Container>
      <ToDo>{toDo}</ToDo>
      <Button
        label="삭제"
        backgroundColor="#ff1744"
        hoverColor="#f01440"
        onClick={() => {
          deleteToDo(id);
          navigate('/');
        }}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;

const ToDo = styled.div`
  min-width: 350px;
  height: 350px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #bdbdbd;
  overflow-y: auto;
`;
