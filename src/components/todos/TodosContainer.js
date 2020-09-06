import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'
 
class TodosContainer extends Component {
    //Now we need to call that component from a map function in the TodosContainer component:
    // getting eac todo from todos array and  passing the value of each todo into a child component and render.
 
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