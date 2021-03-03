import React from 'react'

const Todo = props => {
    console.log("TODO",props)
  return (
      <li>{props.text}</li>
  )
};
export default Todo
