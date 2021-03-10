import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import {Post} from './Post'
import {PostCollection} from '../api/PostCollection'
import {PostForm} from "./PostForm"

export const App = () => {
  // const posts = [
  //   {_id: 1, text: 'First Task'},
  //   {_id: 2, text: 'Second Task'},
  //   {_id: 3, text: 'Third Task'},
  // ];
  const posts = useTracker(() => PostCollection.find({}).fetch());
  const deletePost = ({ _id }) => PostCollection.remove(_id);
  return(
    <div className="app">
      <header>
      <div className="app-bar">
          <div className="app-header">
            <h1>Welcome to Feed</h1>
          </div>
        </div>
      </header>
      <div className="main">
      <PostForm/> 
    <ul className="posts">
        { posts.map(post => <Post key={ post._id } post={ post } onDeleteClick={deletePost}/>) }
      </ul>
      </div>
   
  </div>
  )
}
 
