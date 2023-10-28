import React from "react";

const AddNew = () => (
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
      <button type="submit" className="btn-add">
        {" "}
        Add book{" "}
      </button>
    </form>
  </div>
);

export default AddNew;
