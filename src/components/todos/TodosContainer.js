import React from 'react'
import {connect} from 'react-redux'
import Todo from './Todo.js'

class TodosContainer extends React.Component {
    renderTodos = () => this.props.todos.map((todo, i) => <Todo key={i} text={todo} />)

    render(){
        return (
            <ul>
                {this.renderTodos()}
            </ul>
        )
    }
}

const mapStateToProps = state =>{
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(TodosContainer)
