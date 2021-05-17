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
  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state)
    this.setState({
      text: '',
    })
  }

};

export default connect(state => ({ todos: state.todos }))(TodosContainer);