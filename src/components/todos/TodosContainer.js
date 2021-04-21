import React, { Component } from 'react'
import { connect } from 'react-redux'

// mapping over todos it received from Redux, passing value into child component, Todo
class TodosContainer extends Component {
    renderTodos = () => this.props.todos.map((todo, id) => < Todo key={id} text={todo} />)
    
    render() {
        return (
            <div>{this.renderTodos()}</div>
        )
    }
}

const mapStateToProps = state => {
    return { 
        todos: state.todos
    }
}

export default connect(mapStateToProps)(TodosContainer)