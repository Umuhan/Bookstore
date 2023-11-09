import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './styles/BookList.css';
import AddNew from './NewBooks';
import Book from './Book';
import { fetchBooks } from '../redux/books/booksSlice';

const BookList = () => {
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="book-list">
        {books.map((book) => (
          <Book
            key={book.item_id}
            item_id={book.item_id}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        ))}
      </div>
      <AddNew />
    </div>
  );
};

export default BookList;
