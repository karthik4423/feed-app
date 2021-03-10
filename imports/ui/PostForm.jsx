import React, { useState } from 'react';
import { PostCollection } from '../api/PostCollection';

export const PostForm = () => {
  const [text, setText] = useState("");
  const handleSubmit = e => {
    e.preventDefault();

    if (!text) return;

    PostCollection.insert({
      text: text.trim(),
      createdAt: new Date()
    });

    setText("");
  };
 
  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What's on your mind?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
 
      <button type="submit">Add Post</button>
    </form>
  );
};