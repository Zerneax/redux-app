import App from './App';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import configureStore from 'redux-mock-store';
import {mount} from 'enzyme';


const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleware]);//createStore(reducers, applyMiddleware(sagaMiddleware));


const stateInitial = {
  postsState: {posts: []},
  globalState: {loading: true, hasError: false, message: ''}
}

const statePostsSuccess = {
  postsState: {posts: [{id: 1, title: 'toto'}]},
  globalState: {loading: false, hasError: false, message: ''}
}

const stateError = {
  postsState: {posts: []},
  globalState: {loading: false, hasError: true, message: 'An error occured'}
}

const loadPosts = () => ({type: 'GET_POSTS_REQUESTED'})
const getPosts = () => ({ type: 'GET_POSTS_SUCCESS', postsState: {id: 1} })


describe('testing App Component', () => {

  test('renders default page', () => {
    const store: any = mockStore(stateInitial);
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    )
    const linkElement = wrapper.find('Loading');
    expect(linkElement).toHaveLength(1);
  });

  test('renders page with posts', () => {
    const store: any = mockStore(statePostsSuccess);
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    )
    expect(wrapper.find('Loading')).toHaveLength(0);
    expect(wrapper.find('Posts')).toHaveLength(1);
  });

  test('renders page with error', () => {
    const store: any = mockStore(stateError);
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    )
    expect(wrapper.find('Loading')).toHaveLength(0);
    expect(wrapper.find('Posts')).toHaveLength(0);
    expect(wrapper.find('Error')).toHaveLength(1);

  });

});
