import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const BookList = () => {
  const books = useSelector((state) => state.books.books);

  return (
    <>
      <div className="book-list">
        {books.map((book) => (
          <Book
            key={book.itemId}
            itemId={book.itemId}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        ))}
      </div>
    </>
  );
};

export default BookList;
