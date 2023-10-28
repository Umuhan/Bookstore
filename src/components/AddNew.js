import React from "react";
import { Link } from "react-router-dom";
import BookList from "./BookList";

const AddNew = () => {
  return (
    <div>
      <h2 className="header">Books</h2>
      <form className="form">
        <input
          type="text"
          className="title"
          name="booktitle"
          placeholder="Title"
        />
        <input
          type="text"
          className="author"
          name="author"
          placeholder="Author"
        />
        <input
          type="text"
          className="category"
          name="bookcategory"
          placeholder="Category"
        />
        <button type="submit" className="btn">
          {" "}
          Add book{" "}
        </button>
      </form>
    </div>
  );
};

export default AddNew;
