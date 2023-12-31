import React from 'react';
import { PropTypes } from 'prop-types';

function Book({
  title, author, RemoveExistingBook, id,
}) {
  return (
    <>
      <div>
        <h2>{title}</h2>
        <h4>{author}</h4>
        <button type="button" onClick={() => RemoveExistingBook(id)}>Remove</button>
      </div>
    </>
  );
}
Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  id: PropTypes.number,
  RemoveExistingBook: PropTypes.func,
};
Book.defaultProps = {
  title: '',
  author: '',
  id: '',
  RemoveExistingBook: null,
};

export default Book;
