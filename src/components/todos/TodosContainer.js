import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo'
 
class TodosContainer extends Component{
 
  render() {
    return(
      <div>{this.props.todos.map(todo=><Todo todo = {todo}/>)}</div>
    );
  }
};
 
export default connect(state=>({todos: state.todos}))(TodosContainer);