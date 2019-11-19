import React from "react";
import { connect } from "react-redux";

class CreateTodo extends React.Component {

	state = {
		text: ""
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.addTodo(this.state);
		this.setState({
			 text: ""
		});
	}

	handleChange = (event) => {
		this.setState({
			text: event.target.value
		})
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>add todo </label>
					<input type="text"
								 onChange={this.handleChange}
								 value={this.state.text} />
					<input type="submit" />
			 </form>
			 <br />
		 </div>
	 )
	}

}

const mapDispatchToProps = (dispatch) => ({
	addTodo: (formData) => dispatch({type: "ADD_TODO", payload: formData})
})

export default connect(null, mapDispatchToProps)(CreateTodo)
