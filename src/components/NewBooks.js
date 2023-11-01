import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook, removeBook } from "../redux/books/booksSlice";

const BookActions = () => {
  const dispatch = useDispatch();
  const [newBook, setNewBook] = useState({
    id: "",
    title: "",
    author: "",
    category: "",
  });

  const handleAddBook = () => {
    dispatch(addBook(newBook));
    setNewBook({
      id: "",
      title: "",
      author: "",
      category: "",
    });
  };

  const handleRemoveBook = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div>
      <form className="form">
        <input
          type="text"
          placeholder="Title"
          className="input-title input"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Author"
          className="author input"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
        />
        <input
          type="text"
          placeholder="Category"
          className="category input"
          value={newBook.category}
          onChange={(e) => setNewBook({ ...newBook, category: e.target.value })}
        />
        <button type="button" onClick={handleAddBook} className="btn-add btn">
          Add Book
        </button>
        <button
          type="button"
          className="btn-remove btn"
          onClick={() => handleRemoveBook(newBook.item_id)}
        >
          Remove Book
        </button>
      </form>
    </div>
  );
};

export default BookActions;
