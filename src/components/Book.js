/* eslint-disable */
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { removeBook } from "../redux/books/booksSlice";

const Book = ({ item_id, title, author, category }) => {
  const dispatch = useDispatch();

  return (
    <div className="books-container">
      <div className="book-list" key={item_id}>
        <h2 className="booktitle book">{title}</h2>
        <h3 className="author book">{author}</h3>
        <h3 className="category book">{category}</h3>

        <div className="btn-container">
          <button
            type="button"
            className="btn"
            onClick={() => dispatch(removeBook({ item_id }))}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  item_id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
export default Book;
