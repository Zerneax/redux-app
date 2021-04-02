import React from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './components/posts';
import Error from './components/error';
import { connect } from 'react-redux';
import Loading from './components/loading';

type AppProps = {
  dispatch: any,
  countedPosts: number,
  hasError: boolean,
  loading: boolean
}

class App extends React.Component<AppProps> {

  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch({ type: 'GET_POSTS_REQUESTED' });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {
            this.props.loading ? <Loading /> :
                !this.props.hasError ?
                  <div>
                    <p>
                     Actually, there are : {this.props.countedPosts} posts
                    </p>
                    <Posts />
                  </div>
                  :
                  <Error />
          }
        </header>
      </div>
    );
  }

}

const mapStateToProps = (state: any) => {
  return {countedPosts : state.postsState.posts.length, hasError: state.globalState.hasError, loading: state.globalState.loading};
}

export default connect(mapStateToProps)(App);
