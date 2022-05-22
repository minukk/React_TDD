import React from 'react';
import { Routes, Route, Router, useLocation } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { screen, render, fireEvent } from '@testing-library/react';
import 'jest-styled-components';

import { ToDoListProvider } from 'Context';
import { List } from './index';

describe('<List />', () => {
  it('renders component correctly', () => {
    const history = createMemoryHistory();
    history.push('/');

    localStorage.setItem('ToDoList', '["ToDo 1", "ToDo 2", "ToDo 3"]');

    const { container } = render(
      <ToDoListProvider>
        <Router navigator={history} location={history.location}>
          <List />
        </Router>
      </ToDoListProvider>,
    );

    const toDoItem1 = screen.getByText('ToDo 1');
    expect(toDoItem1).toBeInTheDocument();
    expect(toDoItem1.getAttribute('href')).toBe('/detail/0');
    const toDoItem2 = screen.getByText('ToDo 2');
    expect(toDoItem2).toBeInTheDocument();
    expect(toDoItem2.getAttribute('href')).toBe('/detail/1');
    const toDoItem3 = screen.getByText('ToDo 3');
    expect(toDoItem3).toBeInTheDocument();
    expect(toDoItem3.getAttribute('href')).toBe('/detail/2');

    expect(screen.getAllByText('삭제').length).toBe(3);

    const addButton = screen.getByText('+');
    expect(addButton).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
