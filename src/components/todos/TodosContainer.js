import React, { Component } from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

class ToDosContainer extends Component {
  renderTodos = () => this.props.todos.map((todo, i) => <Todo key={i} text={todo} />);

  render() {
    return <div>{this.renderTodos()}</div>;
  }
}

const mapStateToProps = state => {
  return { todos: state.todos };
};

export default connect(mapStateToProps)(ToDosContainer);
