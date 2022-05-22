import React from 'react';
import styled from 'styled-components';

interface Props {
  readonly label: string;
  readonly backgroundColor?: string;
  readonly hoverColor?: string;
  readonly onClick?: () => void;
}

interface ContainerProps {
  readonly backgroundColor: string;
  readonly hoverColor: string;
}

export const Button = ({
  label,
  backgroundColor = '#304ffe',
  hoverColor = '#1e40ff',
  onClick,
}: Props) => {
  return (
    <Container backgroundColor={backgroundColor} hoverColor={hoverColor} onClick={onClick}>
      <Label>{label}</Label>
    </Container>
  );
};

const Container = styled.div<ContainerProps>`
  padding: 10px 20px;
  border-radius: 8px;
  background-color: ${(props) => props.backgroundColor};
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.hoverColor};
  }

  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

const Label = styled.div`
  color: #fff;
  font-size: 16px;
`;
