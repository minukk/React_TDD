import React from 'react';
import styled from 'styled-components';

import { Button } from 'Components/Button';
import { Link } from 'react-router-dom';

interface Props {
  readonly id: number;
  readonly label: string;
  readonly onDelete?: () => void;
}

export const ToDoItem = ({ id, label, onDelete }: Props) => {
  return (
    <Container>
      <Label to={`/detail/${id}`}>{label}</Label>
      <Button label="삭제" backgroundColor="#ff1744" hoverColor="#f01440" onClick={onDelete} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
  padding: 10px;
  border-bottom: 1px solid #bdbdbd;
`;

const Label = styled(Link)`
  flex: 1;
  margin-left: 20px;
  font-size: 16px;
  text-decoration: none;
`;
