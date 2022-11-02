import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "../app/postsSlice";
import { selectAllUsers } from "../app/usersSlice";

function AddPostForm() {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (title && content) {
      dispatch(
        // postAdded({
        //   id: nanoid(),
        //   title,
        //   content,
        // })
        postAdded(title, content, userId)
      );
    }

    setTitle("");
    setContent("");
    setUserId("");
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section>
      <h2>Add a New Post</h2>
      <form onSubmit={submit}>
        <label htmlFor="postTitle">Post Title: </label>
        <input
          type="text"
          placeholder="type new post title"
          id="postTitle"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="postAuthor">Author:</label>
        <select
          name="postAuthor"
          id="postAuthor"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        >
          <option value=""></option>
          {userOptions}
        </select>

        <label htmlFor="postContent">Content:</label>
        <textarea
          name="content"
          id="postContent"
          cols="30"
          rows="10"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>

        <button type="submit" disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  );
}

export default AddPostForm;
