import React, { Component } from 'react';
import { connect } from 'react-redux'

import Todo from './Todo'   /* 2. code change */

// 0. ToDosContainer Template:

// class TodosContainer extends Component {
//
//     render() {
//         return(
//         <div></div>
//         );
//     }
// };
//
// export default connect()(TodosContainer);


// 1. Add mapDispatchToProps():

// class TodosContainer extends Component {
//
//     render() {
//         return(
//         <div></div>
//         );
//     }
// };
//
// /* code change */
// const mapStateToProps = state => {
//     return {
//         todos: state.todos
//     }
// }
//
// export default connect(mapStateToProps)(TodosContainer);    /* code change */


// 2. Map over todos and render each instance:

class TodosContainer extends Component {

    /* code change */
    const renderTodos = () => this.props.todos.map((todo, id) => <Todo key={id} text={todo} />)

    render() {
        return(
        <div>
            { this.renderTodos() }  /* code change */
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
