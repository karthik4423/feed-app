import React from 'react';
import {Comment} from './Comment'
import {CommentForm} from "./CommentForm"
import {CommentCollection} from '../api/CommentCollection'
import { useTracker } from 'meteor/react-meteor-data';

 
export const Post = ({ post,onDeleteClick }) => {
    const comments = useTracker(() => CommentCollection.find({}).fetch());
  return( <div>
 <li>
     <span>{post.text}</span>
    <button onClick={ () => onDeleteClick(post) }>&times;</button>
     </li>
     <CommentForm post_id = {post._id}/>
     <ul className="comments">
        { comments.map(comment => <Comment key={ comment._id } comment={ comment }/>) }
      </ul>
  </div>
 )
};