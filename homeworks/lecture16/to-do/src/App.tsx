import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { TodoList } from './features/todos/TodoList';
import './App.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;