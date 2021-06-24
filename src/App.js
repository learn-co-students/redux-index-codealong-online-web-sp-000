import React, { Component } from 'react';
import CreateTodo from './components/todos/CreateTodo'
// import Todo from './components/todos/Todo'
import TodosContainer from './components/todos/TodosContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CreateTodo />
        <TodosContainer />
       
      </div>
    );
  }
}

export default App;
