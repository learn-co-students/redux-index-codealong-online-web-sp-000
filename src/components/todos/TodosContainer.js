import React, { Component } from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'

class TodosContainer extends Component {
//we don't need to dispatch any actions in this component -- only to get our state

  renderTodos = () => 
    this.props.todos.map((todo, index) => <Todo key={index} text={todo}/>)


  render(){
    return(
      <div>
        {this.renderTodos()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}


//only concerned with state here
export default connect(mapStateToProps)(TodosContainer)


//Don't forget to add this component to <App /> so that it can be rendered!
