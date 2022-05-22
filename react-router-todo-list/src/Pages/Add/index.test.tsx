import React from 'react';
import { Router, useLocation } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { screen, render, fireEvent } from '@testing-library/react';
import 'jest-styled-components';

import { Add } from './index';
import { ToDoListProvider } from 'Context';

describe('<App />', () => {
  it('renders component correctly', () => {
    const history = createMemoryHistory();
    history.push('/add');

    const { container } = render(
      <Router navigator={history} location={history.location}>
        <Add />
      </Router>,
    );

    const input = screen.getByPlaceholderText('할 일을 입력해 주세요.');
    expect(input).toBeInTheDocument();
    const button = screen.getByText('추가');
    expect(button).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('add a new ToDo and redirect to the root page', () => {
    const history = createMemoryHistory();
    history.push('/add');

    const TestComponent = () => {
      const { pathname } = useLocation();
      return (
        <ToDoListProvider>
          <div>{pathname}</div>
          <Add />
        </ToDoListProvider>
      );
    };

    render(
      <Router navigator={history} location={history.location}>
        <TestComponent />
      </Router>,
    );

    const pathName = screen.getByText('/add');
    expect(pathName).toBeInTheDocument();

    const input = screen.getByPlaceholderText('할 일을 입력해 주세요.');
    const button = screen.getByText('추가');

    fireEvent.change(input, { target: { value: 'New ToDo' } });
    fireEvent.click(button);

    expect(history.location.pathname).toBe('/');
    expect(localStorage.getItem('ToDoList')).toBe('["New ToDo"]');
  });
});
