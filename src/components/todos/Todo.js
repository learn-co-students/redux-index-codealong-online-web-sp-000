// presentational component to handle displaying our todos
//  we'll have each todo rendered as a list item
import React from 'react'

const Todo = props => {
    return (
    <li>{props.text}</li>
    );
};

export default Todo;
// Now we need to call that component from a map function in the TodosContainer component
