# Redux: Indexing Code-a-long

**Objective**
Display a list of elements from our Redux store

**Goal**
The state is properly updating but you're not displaying these updates to the user.

You need a component that references the store
and then uses the data from the store to reference the list of Todos.

**Displaying Todos**
CreateTodo.js is handling the creation side of things.

Make a new component that gets todos from the store.
Call it TodosContainer.js and connect it to Redux.

```js

// ./src/components/todos/TodosContainer.js

import React, { Component } from 'react';
import { connect } from 'react-redux'

class TodosContainer extends Component {

    render() {
        return(
        <div></div>
        );
    }
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(TodosContainer);

```

**Create a Presentational Component**
To start, you'll have each todo rendered as a list item.

Inside the ./src/components/ folder: create a file Todo.js.

Inside it, write a functional component that returns an <li> displaying props:

```js

// ./src/components/todos/Todo.js

import React from 'react'

const Todo = props => {
    return (
        <li>{props.text}</li>
    );
};

export default Todo;

// ************************************************************************** //

// Now you need to call that component from a .map() in the TodosContainer component:

// ./src/components/todos/TodosContainer.js

import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'

class TodosContainer extends Component {

    renderTodos = () => this.props.todos.map((todo, id) => <Todo key={id} text={todo} />)

    render() {
        return(
        <div>
            {this.renderTodos()}
        </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(TodosContainer);

// Now your TodosContainer is mapping over the todos it received from Redux,
// passing the value of each todo into a child component, Todo.

// Todo in this case doesn't have any Redux related code,
// and is a regular, functional component.

```

**Cleanup Todo Input**
Each time you submit a todo, you want to clear out the input.
Remember that each time you submit a form, you call @handleSubmit.

Inside that handleSubmit function, reset the component's state:

```js

    // CreateTodo.js

    ...

    handleSubmit = event => {
        event.preventDefault();

        this.props.addTodo(this.state)

        this.setState({
            text: '',
        })
    }

    ...

```
