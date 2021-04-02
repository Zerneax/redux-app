import React from 'react';
import { connect } from 'react-redux';

type PostsProps = {
  dispatch: any,
  posts: Array<any>
}

class Posts extends React.Component<PostsProps, {}> {

  constructor(props: any) {
    super(props);

    this.deletePost = this.deletePost.bind(this);
  }

  deletePost(id: number) {
    this.props.dispatch({
      type: 'DELETE_POST',
      id: id
    });
  }

  render() {
    return (
      <div>
      <h1> posts components </h1>
      {
        this.props.posts.map((post: any) =>
          <li key={post.id}>{post.title} <button onClick={() => this.deletePost(post.id)}> - </button></li>
        )
      }
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {posts: state.postsState.posts};
}

const mapDispatchToProps = (dispatch: any) => {
  return {dispatch};
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
