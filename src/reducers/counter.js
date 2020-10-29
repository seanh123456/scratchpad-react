const initialState = { count: 0, loading: false }

const counter = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_COUNT':
      return { ...state, loading: true }
    case 'RECIEVE_COUNT':
      return { ...state, count: action.count, loading: false }
    default:
      return state
  }
}

export default counter
