import React from 'react'; 
import { connect } from 'react-redux' 
import Todo from './Todo'


class TodosContainer extends React.Component {

    renderToDos = () => this.props.todos.map((todo, id) => <Todo key={id} 
        text={todo}/>)

    render() {
        // console.log(TodosContainer);
        
        return(
            <div>
            {this.renderToDos()}
            </div>
        )
    }


}

const mapStateToProps = state => {
    return {
        todos: state.todos

    }
}

export default connect(mapStateToProps) (TodosContainer)