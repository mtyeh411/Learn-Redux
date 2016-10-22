// a reducer takes in two things:
// 1. the copy of current state
// 2. the action Object (information about what happend)

export function postComments(state=[], action) {
  switch(action.type) {
    case 'ADD_COMMENT':
      // return existing state + new comment
      return [...state, {
        user: action.author,
        text: action.comment
      }]
    case 'REMOVE_COMMENT':
      return [
        ...state.slice(0, action.index), // elements before i
        ...state.slice(action.index+1) // elements after i
      ]
    default:
      return state;
  }
}

function comments(state = [], action) {
  if(typeof action.postId !== 'undefined') {
    return {
      ...state, // take current state
      [action.postId]: postComments(state[action.postId], action) // overwrite this post with a new one
    };
  }
  return state;
}

export default comments;
