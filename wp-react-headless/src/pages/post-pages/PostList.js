import React, { Component } from 'react';
import { PostItem } from './PostItem';
import axios from 'axios';

export class PostList extends Component {
  state = {
    posts: [],
    isLoaded: false
  };

  componentDidMount() {
    axios.get('/wp-json/wp/v2/posts').then(posts => {
      // console.log('TCL: PostList -> componentDidMount -> posts', posts);

      this.setState({
        posts: posts.data,
        isLoaded: true
      });
    });
  }

  render() {
    const { posts, isLoaded } = this.state;
    console.log(
      'TCL: PostList -> render -> this.state.posts',
      this.state.posts
    );

    if (isLoaded) {
      return (
        <div>
          {posts.map(post => (
            // console.log('TCL: PostList -> render -> post', post.id);
            <PostItem key={post.id} post={post} />
          ))}
        </div>
      );
    }

    return <h3>Loading...</h3>;
  }
}

export default PostList;
