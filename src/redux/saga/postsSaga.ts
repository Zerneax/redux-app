import { call, put, takeEvery } from 'redux-saga/effects'

const apiUrl = `https://jsonplaceholder.typicode.com/posts`;
function getApi() {
  console.log("get Api posts");
  return fetch(apiUrl, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',

      }
  }).then(response => {
      if(response.ok) {
        return response.json();
      } else {
        throw {message: 'unable to get posts data | reason : ' + response.status};
      }
    })
    .catch((error) => {throw error})
}

function* fetchPosts(action: any): any{
  console.log("fetchPosts");

   try {
      const posts = yield call(getApi);
      yield put({type: 'GET_POSTS_SUCCESS', posts: posts});
   } catch (e) {
      yield put({type: 'GET_POSTS_FAILED', message: e.message});
   }
}

function* postsSaga() {
  console.log("postsSaga");
  yield takeEvery('GET_POSTS_REQUESTED', fetchPosts);
}

export default postsSaga;
