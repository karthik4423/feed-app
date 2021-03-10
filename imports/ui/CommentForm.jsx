import React, { useState } from 'react';
import { CommentCollection } from '../api/CommentCollection';

export const CommentForm = (post_id) => {
  const [text, setText] = useState("");
  const handleSubmit = e => {
    e.preventDefault();

    if (!text) return;

    CommentCollection.insert({
      post_id: post_id,
        text: text.trim(),
      createdAt: new Date()
    });

    setText("");
  };
 
  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a comment..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
 
      <button type="submit">Add Comment</button>
    </form>
  );
};