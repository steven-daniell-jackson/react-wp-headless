import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import { stripHtml } from '../../functions/helper-functions';

export class PostItem extends Component {
  state = {
    isLoaded: false
  };
  static propTypes = {
    post: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.setState({
      isLoaded: true
    });
  }

  render() {
    const { isLoaded } = this.state;
    const { id, title, excerpt } = this.props.post;
    console.log('TCL: PostItem -> render -> isLoaded', isLoaded);
    // const { id, title } = this.props.posts;

    if (isLoaded) {
      return (
        <div>
          {/* <img src={imgUrl} alt={title.rendered} /> */}
          <h2>{title.rendered}</h2>
          <small>ID: {id}</small>
          <p>
            Excerpt:{' '}
            {excerpt.rendered !== ''
              ? stripHtml(excerpt.rendered)
              : 'No excerpt'}
          </p>
          {/* <small>Author {author}</small> */}
          <br />
          <Link to={`/post-list/}`}>
            {' '}
            <Button variant="contained" color="primary">
              Hello World
            </Button>
          </Link>
          <hr />
        </div>
      );
    }
    return null;
  }
}
export default PostItem;
