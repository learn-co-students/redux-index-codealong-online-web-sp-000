export default function manageTodo(state = {
  todos: [],
  debugger
}, action) {
  switch (action.type) {
    case 'ADD_TODO':

      return { todos: state.todos.concat(action.payload.text) };

    default:
      return state;
  }
}
