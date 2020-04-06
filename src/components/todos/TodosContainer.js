import React from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'

class ToDosContainer extends React.Component {

    renderTodos = () => {
        return this.props.todos.map((todo, id) => <li key={id}>{todo}</li>)
    }

    render() {
        return (
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

export default connect(mapStateToProps)(ToDosContainer)