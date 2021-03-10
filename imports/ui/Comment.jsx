import React from "react";


export const Comment = ({ user, comment, onDeleteClick }) => {
  return (
    <div>
      <li>
        <span>{comment.userName}</span>
        <span>{comment.text}</span>
        {user.username==comment.userName?<button onClick={() => onDeleteClick(comment)}>&times;</button>:"  "}
        
      </li>
      
    </div>
  );
};
