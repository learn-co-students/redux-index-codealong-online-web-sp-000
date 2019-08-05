import {Todo} from './Todo';
import React, {Component} from 'react';
import {connect} from 'react-redux';

class TodosContainer extends Component {
  render(){
    const todoList = this.props.todos.map((todo, i) => {
      return <Todo todoInfo={todo} key={i}/>
    })

    return (
      <div>
        {todoList}
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(TodosContainer)