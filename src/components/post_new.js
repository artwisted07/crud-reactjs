import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';
import { reduxForm, Field } from 'redux-form';
import { createPost } from '../actions/index';
import { connect } from 'react-redux';



class PostNew extends Component{
  static contextTypes={
    router: PropTypes.object
  }
  
  
  onSubmit(props){
      this.props.createPost(props)
      .then(()=>{
        this.context.router.push('/');
      });
  }

  render(){
    
  const { handleSubmit } = this.props;   //handleSubmit is a redux-form method
  
    const renderInput = field => 
  <div className={field.meta.touched && field.meta.invalid ? "has-danger": "" } >
    <input {...field.input} type={field.type} className="form-control" /> 
     {field.meta.touched && field.meta.error && <div className="text-help">{field.meta.error}</div>}
  </div>
    
  const renderTextArea = field => 
  <div className={field.meta.touched && field.meta.invalid ? "has-danger": ""} >
    <textarea {...field.input} type={field.type} className="form-control" /> 
     {field.meta.touched && field.meta.error && <div className="text-help">{field.meta.error}</div>}
  </div>
    
    return(
      <div className="col-xs-12 ">
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))} >
      
          <label htmlFor="title">Title</label>
          <Field name="title" type="text"  component={renderInput}  />
        
          <label htmlFor="categories">Categories</label>
          <Field name="categories" component={renderInput} type="text"  />
         
           <label htmlFor="content">Content</label>
          <Field name="content" type="textarea" component={renderTextArea}  />
            
          <button type="submit" className="btn btn-primary">Submit</button>
          <Link to='/' className="btn btn-danger">Cancel</Link>
          </form>
      </div>
    )
  };
}



function validate(values){
  const errors = {}
  if (!values.title) {
    errors.title = 'A Title is Required'
  }
  if (!values.categories) {
    errors.categories = 'Please Enter a Category'
  }
  
  if (!values.content) {
    errors.content = 'Input a description'
  }
  return errors
}


const formData={
  form: 'PostNewForm',
  fields:['title', 'categories', 'content'],
  validate
}


export default connect(null, {createPost})(reduxForm(formData)(PostNew));