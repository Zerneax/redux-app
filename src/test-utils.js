import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { Provider } from 'react-redux'
import globalReducer from './redux/reducer/globalReducer';
import postsReducer from './redux/reducer/postsReducer';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';


// Import your own reducer

const reducers = combineReducers({
  postsState: postsReducer,
  globalState: globalReducer
});

const sagaMiddleware = createSagaMiddleware();

function render(
  ui,
  {
    initialState,
    store = createStore(reducers, applyMiddleware(sagaMiddleware)),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }
