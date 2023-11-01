import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const BookList = () => {
  const { books } = useSelector((state) => state);

  return (
    <>
      <div className="book-list">
        {books.map((book) => {
          const {
            id, title, author, category,
          } = book;
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
    </>
  );
};

export default BookList;
