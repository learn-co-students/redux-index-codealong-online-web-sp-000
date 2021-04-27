import React from 'react'
import {Component} from 'react'
import {connect} from 'react-redux'
import Todo from './Todo'

class TodosContainer extends Component {

    renderTodos = () => this.props.todos.map((todo, idx) => <Todo key={idx} text={todo}/>)

    render(){
        // {console.log(this.props.todos)}
        return(
            <div>
                {this.renderTodos()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        todos: state.todos
    }
}

export default connect(mapStateToProps)(TodosContainer)