import postsReducer from '../postsReducer';

describe('test globalReducer', () => {

  it('should test initial state', () => {
    const state = postsReducer(undefined, {});
    expect(state).toEqual({
      posts: []
    });
  });

  it('should test GET_POSTS_REQUESTED state', () => {
    const state = postsReducer(undefined, {type: 'GET_POSTS_REQUESTED'});
    expect(state).toEqual({
      posts: []
    });
  });

  it('should test GET_POSTS_SUCCESS state', () => {
    const state = postsReducer(undefined, {type: 'GET_POSTS_SUCCESS', posts: [{id: 1, title: 'toto'}]});
    expect(state).toEqual({
      posts: [{id: 1, title: 'toto'}]
    });
  });

  it('should test GET_POSTS_FAILED state', () => {
    const state = postsReducer(undefined, {type: 'GET_POSTS_FAILED'});
    expect(state).toEqual({
      posts: []
    });
  });

  it('should test DELETE_POST state', () => {
    const currentState: any = {
      posts: [{id: 1, title: 'toto'}, {id: 2, title: 'titi'}]
    };

    const state = postsReducer(currentState, {type: 'DELETE_POST', id: 1});
    expect(state).toEqual({
      posts: [{id: 2, title: 'titi'}]
    });
  });
});
