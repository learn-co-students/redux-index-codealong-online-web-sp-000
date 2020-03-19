import React, { Component } from 'react'
import { connect } from  'react-redux'
import Todo from './Todo'

class TodoContainer extends Component {

  renderTodos = () => this.props.todos.map(todo => <Todo text={todo} />)

  render() {
    return(
      <div>
        {this.renderTodos()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    todos: state.todos
  }
}

export default connect(mapStateToProps)(TodoContainer)
