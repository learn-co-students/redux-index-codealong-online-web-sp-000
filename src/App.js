import React, { Component } from 'react';
import CreateTodo from './components/todos/CreateTodo'
import TodosContainer from './components/todos/TodosContainer'
import Todo from './components/todos/Todo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CreateTodo />
        <TodosContainer/>
        <Todo/>
      </div>
    );
  }
}

export default App;
