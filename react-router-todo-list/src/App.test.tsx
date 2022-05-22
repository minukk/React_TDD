import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import 'jest-styled-components';
import App from './App';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

describe('<App />', () => {
  it('renders component correctly', () => {
    const history = createMemoryHistory();
    history.push('/');

    const { container } = render(
      <Router navigator={history} location={history.location}>
        <App />
      </Router>,
    );

    const header = screen.getByText('할 일 목록');
    expect(header).toBeInTheDocument();

    const toDoList = screen.getByTestId('toDoList');
    expect(toDoList).toBeInTheDocument();
    expect(toDoList.firstChild).toBeNull();

    const input = screen.getByText('+');
    expect(input).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  // it('adds and deletes ToDo items', () => {
  //   const history = createMemoryHistory();
  //   history.push('/');

  //   render(
  //     <Router navigator={history} location={history.location}>
  //       <App />
  //     </Router>,
  //   );

  //   const input = screen.getByPlaceholderText('할 일을 입력해 주세요.');
  //   const button = screen.getByText('추가');
  //   fireEvent.change(input, { target: { value: 'study react 1' } });
  //   fireEvent.click(button);

  //   const todoItem = screen.getByText('study react 1');
  //   expect(todoItem).toBeInTheDocument();

  //   const deleteButton = screen.getByText('삭제');
  //   expect(deleteButton).toBeInTheDocument();

  //   const toDoList = screen.getByTestId('toDoList');
  //   expect(toDoList.childElementCount).toBe(1);

  //   fireEvent.change(input, { target: { value: 'study react 2' } });
  //   fireEvent.click(button);

  //   const todoItemSecond = screen.getByText('study react 2');
  //   expect(todoItemSecond).toBeInTheDocument();
  //   expect(toDoList.childElementCount).toBe(2);

  //   const deleteButtons = screen.getAllByText('삭제');
  //   fireEvent.click(deleteButtons[0]);

  //   expect(todoItem).not.toBeInTheDocument();
  //   expect(toDoList.childElementCount).toBe(1);
  // });

  it('does not add empty ToDo', () => {
    const history = createMemoryHistory();

    render(
      <Router navigator={history} location={history.location}>
        <App />
      </Router>,
    );

    const toDoList = screen.getByTestId('toDoList');
    const length = toDoList.childElementCount;

    const button = screen.getByText('+');
    fireEvent.click(button);

    expect(toDoList.childElementCount).toBe(length);
  });

  it('loads localStorage data', () => {
    localStorage.setItem('ToDoList', '["ToDo 1", "ToDo 2", "ToDo 3"]');
    const history = createMemoryHistory();

    render(
      <Router navigator={history} location={history.location}>
        <App />
      </Router>,
    );

    expect(screen.getByText('ToDo 1')).toBeInTheDocument();
    expect(screen.getByText('ToDo 2')).toBeInTheDocument();
    expect(screen.getByText('ToDo 3')).toBeInTheDocument();
    expect(screen.getAllByText('삭제').length).toBe(3);
  });
});
