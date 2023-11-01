import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const Book = ({
  itemId, title, author, category,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="book" key={itemId}>
      <h3 className="category1">{category}</h3>
      <h2 className="booktitle">{title}</h2>
      <h3 className="author1">{author}</h3>
      <button
        type="button"
        className="button-remove"
        onClick={() => dispatch(removeBook(itemId))}
      >
        Remove
      </button>
    </div>
  );
};

Book.propTypes = {
  itemId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
export default Book;
