//create presentational Todo Component
import React from 'react';

const Todo = props => {
    return (
        <li>{props.text}</li>
    );
};

export default Todo; 