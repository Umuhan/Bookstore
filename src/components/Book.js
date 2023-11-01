import PropTypes from "prop-types";

const Book = ({ id, title, author, category }) => (
  <div className="book" key={id}>
    <h3 className="category1">{category}</h3>
    <h2 className="booktitle">{title}</h2>
    <h3 className="author1">{author}</h3>
    <button type="button" className="button-remove">
      Remove
    </button>
  </div>
);

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
export default Book;
