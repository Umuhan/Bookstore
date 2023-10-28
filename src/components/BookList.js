import React from "react";
import AddNew from "./AddNew";
import Book from "./Book";

const BookList = () => {
  const books = [
    {
      id: 1,
      title: "book1",
      author: "author1",
      category: "category1",
    },
    {
      id: 2,
      title: "book2",
      author: "author2",
      category: "category2",
    },
    {
      id: 3,
      title: "book3",
      author: "author3",
      category: "category3",
    },
  ];
  return (
    <>
      <div className="book-list">
        {books.map((book) => {
          const { id, title, author, category } = book;
          return (
            <Book
              key={id}
              id={id}
              title={title}
              author={author}
              category={category}
            />
          );
        })}
      </div>
      <AddNew />
    </>
  );
};

export default BookList;
