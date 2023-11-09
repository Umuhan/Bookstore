import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./styles/NewBooks.css";
import { v4 as uuidv4 } from "uuid";
import { addBook } from "../redux/books/booksSlice";

const NewBooks = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [setText] = useState("");

  const data = {
    item_id: uuidv4(),
    title,
    author,
    category,
  };

  const handleSubmit = (e) => {
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
      <h2 className="new">ADD NEW BOOK </h2>
      <form className="form">
        <input
          type="text"
          placeholder="Title"
          className="booktitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          className="bookauthor"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category"
          className="bookcategory"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit" className="add-btn" onClick={handleSubmit}>
          Add Book
        </button>
      </form>
    </div>
  );
};

export default NewBooks;
