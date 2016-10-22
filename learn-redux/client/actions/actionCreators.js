// these functions create the action that gets dispatched to the store
// often is broken into separate action files, like:

// addLike.js
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  };
}

// addComment.js
export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  };
}

// removeComment.js
export function removeComment(postId, index) {
  return {
    type: 'REMOVE_COMMENT',
    postId,
    index
  }
}
