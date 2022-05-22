import React from 'react';
import styled from 'styled-components';

interface Props {
  readonly placeholder?: string;
  readonly value?: string;
  readonly onChange?: (text: string) => void;
}

export const Input = ({ placeholder, value, onChange }: Props) => {
  return (
    <InputBox
      value={value}
      placeholder={placeholder}
      onChange={(e) => {
        if (typeof onChange === 'function') onChange(e.target.value);
      }}
    />
  );
};

const InputBox = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #bdbdbd;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
`;
