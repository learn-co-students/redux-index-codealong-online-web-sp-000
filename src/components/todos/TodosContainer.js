import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo.js';


class ToDosContainer extends Component {

  renderToDos = () => this.props.todos.map( (todo, id) => <Todo key={id} text={todo} />  )

  render() {
    return(
      <div>
        {this.renderToDos()}
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(ToDosContainer);
