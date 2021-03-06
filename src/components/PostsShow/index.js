import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../../actions';


import './style.css';

class PostsShow extends Component {
  componentDidMount(){
    //check for new posts not in memory
    if (!this.props.post){
      const otherId = this.props.match.params.id;
      const { id } = this.props.match.params;

      console.log('posts show { id } ',id)
      console.log('posts show id ',otherId);

      this.props.fetchPost(id);
    }

  }

  onDeleteClick(){
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }

  render() {
    //this.props === ownProps;
    const { post } = this.props;

    if (!post){
      return <div>Loading...</div>
    }

    return (
      <div>
        <Link className="btn btn-primary" to="/">Back to Index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
          >
          Delete Post
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps){
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost,  deletePost })(PostsShow);
