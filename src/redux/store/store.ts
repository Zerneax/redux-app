import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import globalReducer from '../reducer/globalReducer';
import postsReducer from '../reducer/postsReducer';
import postsSaga from './../saga/postsSaga';

// const initialState = {
//   posts: [],
//   hasError: false,
//   errorMessage: '',
//   loading : true
// };



const reducers = combineReducers({
  postsState: postsReducer,
  globalState: globalReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(postsSaga);

export default store;
