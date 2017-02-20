import React, { Component, PropTypes} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { fetchPost, deletePost } from '../actions/index';


class PostShow extends Component{
    static contextTypes={
    router: PropTypes.object
  }
  
  componentWillMount(){
    this.props.fetchPost(this.props.params.id)
    
  }
  
  
  deletePost(id){
    this.props.deletePost(this.props.params.id)
    .then(()=>{
      this.context.router.push('/');
    })
  }
  
  render(){
  const { post } = this.props;  
    
      if(!this.props.post){
        return <div>LOADING...</div>;
      }
    return(
      <div>
      <span className="post-single-buttons clear-fix">
        <Link to='/' className="btn btn-primary">VIEW ALL</Link>
        <button className="btn btn-danger pull-xs-right" onClick={this.deletePost.bind(this)}>DELETE POST</button>
      </span>
      <hr/>
      <h2>{post.title }</h2>
      <h3>{post.categories}</h3>
      <p>{post.content}</p>
      
      </div>
    )
  }
}


function mapStateToProps(state){
  return {post: state.posts.post};
}

function mapDispatchToProps(dispatch){
  return bindActionCreators( {fetchPost, deletePost}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(PostShow)