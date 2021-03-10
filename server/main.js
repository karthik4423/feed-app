import { Meteor } from "meteor/meteor";
import { PostCollection } from "../imports/api/PostCollection";
import { CommentCollection } from "../imports/api/CommentCollection";

const addComment = (commentText) =>
  CommentCollection.insert({ text: commentText });

Meteor.startup(() => {
  if (CommentCollection.find().count() === 0) {
    [
      "First Task",
      "Another Post",
      "Second Task",
      "Third Task",
      "Fourth Task",
      "Fifth Task",
      "Sixth Task",
      "Seventh Task",
    ].forEach(addComment);
  }
});
