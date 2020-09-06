import React, { Component } from 'react';
import { connect } from 'react-redux';

/*  This component handles the creation of things   */
class CreateTodo extends Component {
    //create a controlled form using state and an onChange event handler ~ every time the input is changed, we want to change the state 
    constructor() {
        super();
        this.state = {
            text: '',
        };
    }

    handleChange = event => {
        this.setState({
            text: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.addTodo(this.state)
        this.setState({
            //resets the component's state 
            text: '',
        })
    }

    render() {
        return(
            <div>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <p>
                        <label>add todo</label>
                        <input type="text" onChange={this.handleChange} value={this.state.text}/>
                    </p>
                    <input type="submit"/>
                </form>
                {this.state.text}
            </div>
        );
    }
};

const mapDispatchToProps = dispatch => {
    return {
      addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
    };
};

export default connect(null, mapDispatchToProps)(CreateTodo);