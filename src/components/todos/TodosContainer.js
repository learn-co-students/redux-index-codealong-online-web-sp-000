import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo' //connects Todo!!
 
class TodosContainer extends Component {
 
renderTodos = () => this.props.todos.map((todo, id) => <Todo key={id} text={todo} />)  
//goes through todos, renders a Todo for each

render() {
    return(
      <div>{this.renderTodos()}</div>
    );
  }
};
 
const mapStateToProps = state => {
    return {
        todos: state.todos //adds redux state to this component's props
    }
}
export default connect(mapStateToProps)(TodosContainer);

//we aren't worried about dispatching actions here, only getting state from Redux, 
//so we'll need to a mapStateToProps() function and include it as an argument for connect():