import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {

  constructor() {
    super();
    this.state = {
      text: '',
    };
  }




  //Cleanup Todo Input
//Each time we submit a todo, we want to clear out the input. 
//Ok, so remember that each time we submit a form, we call handleSubmit. 
//Inside that handleSubmit function let's reset the component's state by changing our function to the following:
  
handleSubmit = event => {
    event.preventDefault();                  
    this.props.addTodo(this.state)              
    this.setState({
      text: '',
    })
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
    	    <label>add todo</label>
          <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.text}/>
          <input type="submit" />
       </form>
     </div>
   );
  }
};

const mapDispatchToProps = dispatch => ({
  addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
})

export default connect(null, mapDispatchToProps)(CreateTodo);
