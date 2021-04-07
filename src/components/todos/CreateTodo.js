import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {
  state = { id: 1, text: '' }

  handleSubmit = event => {
    event.preventDefault()
    this.props.dispatch({ type: 'ADD_TODO', payload: this.state })
    this.setState({ id: this.state.id + 1, text: '' })
    document.getElementById('todo').focus()
  }

  handleChange(event) {
    this.setState({ text: event.target.value })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>add todo </label>
          <input
            type="text"
            id='todo'
            onChange={(event) => this.handleChange(event)}
            value={this.state.text}/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default connect()(CreateTodo)
