import globalReducer from '../globalReducer';

describe('test globalReducer', () => {

  it('should test initial state', () => {
    const state = globalReducer(undefined, {});
    expect(state).toEqual({
      hasError: false,
      errorMessage: '',
      loading : true
    });
  });

  it('should test GET_POSTS_FAILED state', () => {
    const state = globalReducer(undefined, {type: 'GET_POSTS_FAILED', message: 'an error occured'});
    expect(state).toEqual({
      hasError: true,
      errorMessage: 'an error occured',
      loading : false
    });
  });

  it('should test GET_POSTS_SUCCESS state', () => {
    const state = globalReducer(undefined, {type: 'GET_POSTS_SUCCESS'});
    expect(state).toEqual({
      hasError: false,
      errorMessage: '',
      loading : false
    });
  });
});
