import React from 'react';
import { Routes, Route, Router, useLocation } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { screen, render, fireEvent } from '@testing-library/react';
import 'jest-styled-components';

import { ToDoListProvider } from 'Context';
import { Detail } from './index';

describe('<Detail />', () => {
  it('renders component correctly', () => {
    const history = createMemoryHistory();
    history.push('/detail/0');
    localStorage.setItem('ToDoList', '["ToDo 1"]');

    const { container } = render(
      <ToDoListProvider>
        <Router navigator={history} location={history.location}>
          <Routes>
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </Router>
      </ToDoListProvider>,
    );

    const toDoItem = screen.getByText('ToDo 1');
    expect(toDoItem).toBeInTheDocument();

    const button = screen.getByText('삭제');
    expect(button).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('deletes ToDo data', () => {
    const history = createMemoryHistory();
    history.push('/');
    history.push('/detail/0');
    localStorage.setItem('ToDoList', '["ToDo 1"]');

    const TestComponent = () => {
      const { pathname } = useLocation();
      return <div>{pathname}</div>;
    };

    render(
      <ToDoListProvider>
        <Router navigator={history} location={history.location}>
          <TestComponent />
          <Routes>
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </Router>
      </ToDoListProvider>,
    );

    const url = screen.getByText('/detail/0');
    expect(url).toBeInTheDocument();

    const toDoItem = screen.getByText('ToDo 1');
    expect(toDoItem).toBeInTheDocument();

    const button = screen.getByText('삭제');
    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    expect(history.location.pathname).toBe('/');
  });
});
