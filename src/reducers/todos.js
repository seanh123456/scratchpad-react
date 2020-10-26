const initialState = []

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state, {
          id: action.id,
          text: action.text,
          editing: false,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )
    case 'TOGGLE_EDIT':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, editing: true } : todo
      )
    case 'RENAME_TODO':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, text: action.text, editing: false} : todo
      )
    default:
      return state
  }
}

export default todos
