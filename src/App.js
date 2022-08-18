import React from 'react';
import './App.css';
import { TodoCounter } from './components/TodoCounter/TodoCounter';
import { TodoSearch } from './components/TodoSearch/TodoSearch';
import { TodoList } from './components/TodoList/TodoList';
import { TodoItem } from './components/TodoItem/TodoItem';
import { CreateToDoButton } from './components/CreateTodoButton/CreateTodoButton';

const defaultTodos = [
  { text: 'Todo 1', completed: true },
  { text: 'Todo 2', completed: false },
  { text: 'Todo 3', completed: false },
  { text: 'Todo 4', completed: false },
];

function App() {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <React.Fragment>
      <TodoCounter />


      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue} />

      <TodoList>
        {defaultTodos
      .map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
        <TodoItem />
      </TodoList>

      <CreateToDoButton />
    </React.Fragment>
  );
}

export default App;
