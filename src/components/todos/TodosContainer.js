import React, {Component} from 'react'
import {connect} from 'react-redux'
import Todo from './Todo'

class TodosContainer extends Component {

  renderTodos = () => {
    return this.props.todos.map((todo, idx) => {
      return <Todo key={idx} text={todo} />
    })
  }
  render () {
    console.log(this.props)
    return(
      <div>
        {this.renderTodos()}
      </div>
    )
  }
}

export default connect(state => {return{ todos: state.todos}})(TodosContainer)
