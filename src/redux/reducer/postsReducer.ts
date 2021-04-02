const initialState = {
  posts: []
};

const postsReducer = (state = initialState, action: any) => {

  if (action.type === 'GET_POSTS_REQUESTED') {
    return {
      ...state,
      posts: []
    }
  } else if (action.type === 'GET_POSTS_SUCCESS') {
    return {
      ...state,
      posts: state.posts.concat(action.posts)
    };
  } else if (action.type === 'GET_POSTS_FAILED') {
    return {
      ...state,
      posts: []
    };
  } else if (action.type === 'DELETE_POST') {
    const index = state.posts.findIndex((p: any) => p.id === action.id);
    const copy = Object.assign([], state.posts);
    copy.splice(index, 1);
    return {
      ...state,
      posts: copy
    }
  }
  return state;
}

export default postsReducer;
