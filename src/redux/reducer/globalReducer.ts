const initialState = {
  hasError: false,
  errorMessage: '',
  loading : true
};

const globalReducer = (state = initialState, action: any) => {
  if (action.type === 'GET_POSTS_FAILED') {
    return {
      ...state,
      hasError: true,
      errorMessage: action.message,
      loading: false
    };
  } else if (action.type === 'GET_POSTS_SUCCESS') {
    return {
      ...state,
      hasError: false,
      loading: false
    };
  }
  return state;
}

export default globalReducer;
