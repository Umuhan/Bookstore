import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addBook } from "../redux/books/booksSlice";

const NewBooks = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [text, setText] = useState("");

  const data = {
    item_id: uuidv4(),
    title,
    author,
    category,
  };

  const handleSubmit = (e) => {
    console.log("clicked");
    e.preventDefault();
    if (title && author && category) {
      dispatch(addBook(data));
      setTitle("");
      setAuthor("");
      setCategory("");
    } else {
      setText("fill all the required fields");
    }
  };

  return (
    <div>
      {" "}
      <form className="form">
        <input
          type="text"
          placeholder="Title"
          className="input-title input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          className="author input"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category"
          className="category input"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit" className="btn-add btn" onClick={handleSubmit}>
          Add Book
        </button>
      </form>
    </div>
  );
};

export default NewBooks;
