// a reducer takes in two things:
// 1. the copy of current state
// 2. the action Object (information about what happend)

function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES':
      const i = action.index;
      return [
        ...state.slice(0, i), // take everything up and to the one we are updating
        {...state[i], likes: state[i].likes+1}, // update the post at index i
        ...state.slice(i+1), // take everything after the one we are updating
      ]
    default: return state;
  }
}

export default posts;
