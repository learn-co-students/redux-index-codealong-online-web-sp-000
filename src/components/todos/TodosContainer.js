import React from 'react'
import {connect} from 'react-redux'
import Todo from './Todo'

class TodosContainer extends React.Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     todos: this.props.todos
  //   }
  // }

  mapTodo = () => this.props.todos.map((text, index) => <Todo key={index} text={text} />)


  render() {
    return(
      <div>
        {this.mapTodo()}
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(TodosContainer)
