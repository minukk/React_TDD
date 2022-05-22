import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { InputContainer } from 'Components';

export const Add = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <InputContainer onAdd={() => navigate('/')} />
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
