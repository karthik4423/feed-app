import React, { useState } from 'react';
import { CommentCollection } from '../api/CommentCollection';

export const CommentForm = ({user}) => {
  const [text, setText] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    if (!text) return;

    CommentCollection.insert({
      text: text.trim(),
      createdAt: new Date(),
      userId: user._id,
      userName: user.username
    });

    setText("");
  };
 
  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What's on your mind?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
 
      <button type="submit">Add Comment</button>
    </form>
  );
};