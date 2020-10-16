import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'

class TodosContainer extends Component {

    renderTodos = () => this.props.todos.map((todo, id) => <Todo key={id} text={todo} />)
    // Now our TodosContainer is mapping over the todos it received from Redux, passing the value of each todo into a child component, Todo.
    
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
//  component where we'll be getting todos from the store - connect it to Redux.
//  we aren't worried about dispatching actions here, only getting state from Redux, so we'll need to write out a mapStateToProps() function and include it as an argument for connect()
// Now that we have a way to get data from Redux, we can create a presentational component to handle displaying our todos.
