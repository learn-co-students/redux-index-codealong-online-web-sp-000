import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'
 
class TodosContainer extends Component {

    renderTodos = () => {
        return this.props.todos.map((todo) => Todo(todo) )
    }

    render() {
        return(
            <div>
                <ul>
                    {this.renderTodos()}
                </ul>
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