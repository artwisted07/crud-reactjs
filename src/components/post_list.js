import React, { Component } from 'react';
import {  bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';


class PostList extends Component{
  componentWillMount(){
    this.props.fetchPosts();
  }
    
  renderPosts(){
       return this.props.posts.map((post) => {
         return(<li className="list-group-item" key={post.id}>
                <Link to={"posts/" + post.id}>
                <span className="pull-xs-right">{post.categories}</span>
                <strong>{post.title}</strong>
                </Link>
                </li>)
    });
  }
  
  
  
  
  render(){
    return(
      <div className="row">
      <div className="text-xs-right"><Link to='/posts/new' className="btn btn-danger">ADD A POST</Link></div>
      <h1>POSTS</h1>
      <ul className="list-group">
        {this.renderPosts()}
      </ul>
      </div>
    )
  };
}

function mapStateToProps(state){
  return { posts: state.posts.all };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators( {fetchPosts}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);