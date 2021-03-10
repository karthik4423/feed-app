import React from 'react';
 
export const Comment = ({ comment,onDeleteClick }) => {
  return( <div>
 <li>
     <span>{comment.text}</span>
    <button onClick={ () => onDeleteClick(comment) }>&times;</button>
     </li>
 
  </div>
 )
};