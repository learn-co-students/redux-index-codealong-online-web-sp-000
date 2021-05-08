//functional component that returns an li 
//displaying props 

import React from 'react'

//props is an object imbedded in react 
const Todo = props => {
    return (
        <li>{props.text}</li>
    );
};

export default Todo;