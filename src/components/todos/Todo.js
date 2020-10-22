import React from 'react';
import { connect } from 'react-redux';

const Todo = props => {
    return (
        <li>{props.text}</li>
    );
};

export default Todo;