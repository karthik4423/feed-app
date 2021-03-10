import React, {  Fragment } from 'react';
import { useTracker } from 'meteor/react-meteor-data';

import {CommentCollection} from '../api/CommentCollection'
import {Comment} from './Comment'
import {CommentForm} from "./CommentForm"
import { Login } from './Login';

const deleteComment = ({ _id }) => CommentCollection.remove(_id);

export const App = () => {
  const user = useTracker(() => Meteor.user());
  console.log(user)
  const comments = useTracker(() => {
    if (!user) {
      return [];
    }
    return CommentCollection.find({}).fetch();
  });
  console.log(comments)
  const logout = () => Meteor.logout();

  return (
    <div className="app">
      <header>
      <div className="app-bar">
          <div className="app-header">
            <h1>Welcome to Feed</h1>
          </div>
        </div>
      </header>
      <div className="main">
      {user ? (
          <Fragment>
            <div className="user">
            <p>Hi, {user.username}</p>
            <button onClick={logout}>
        Logout
      </button>
            </div>
            
            <CommentForm user={user}/>


            <ul className="comments">
              {comments.map(comment => (
                <Comment
                  key={comment._id}
                  comment={comment}
                  onDeleteClick={deleteComment}
                  user={user}
                />
              ))}
            </ul>
          </Fragment>
        ) : (
          <Login />
        )}
      </div>
  </div>
  )
}

