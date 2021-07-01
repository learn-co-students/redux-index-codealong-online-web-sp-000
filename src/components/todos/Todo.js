import React from 'react' 

const Todo = props => {
    return (
        <React.Fragment key={props.idx}>
        <br></br>
        <li>{props.text}</li>
        </React.Fragment>
    )
}


export default Todo