import React, {Component} from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import PostList from './components/post_list';
import PostNew from './components/post_new';
import PostShow from './components/post_show';

export default(
  <Route path='/' component={App}>
  <IndexRoute component={PostList}/>
  <Route path='posts/new' component={PostNew}/>
  <Route path='posts/:id' component={PostShow} />
  </Route>
)