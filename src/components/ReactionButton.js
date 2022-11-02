import React from "react";
import { useDispatch } from "react-redux";
import { reactionAdded } from "../app/postsSlice";

const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

function ReactionButton({ post }) {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className="reactionButton"
        onClick={() =>
          dispatch(reactionAdded({ postId: post.id, reaction: name }))
        }
      >
        {emoji}
        <span style={{ marginLeft: "10px", color: "black" }}>
          {post.reactions[name]}
        </span>
      </button>
    );
  });

  return <div>{reactionButtons}</div>;
}

export default ReactionButton;
