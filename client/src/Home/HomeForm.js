import React from 'react'
import PropTypes from 'prop-types';



const Form = props => {
  const { create, text, onTextChange, toggleModal } = props;
  return (
    <form onSubmit={e => {
      e.preventDefault();
      create(e);
      toggleModal();
    }}
      className="flex flex-column justify-content-center align-items-center w-100"
    >
      <div className="m-1 w-100">
        <input
          type="text"
          name="note"
          value={text}
          onChange={onTextChange}
          required
          className="input-reset fw4 bg-light-grey w-100"
          style={{ lineHeight: '2'}}
        />
      </div>
      <div className="m-1">
        <button type="submit" className="input-reset fw4 p-4">Take a Note</button>
      </div>
    </form>
  );
};
export default Form;

Form.propTypes = {
    text: PropTypes.string.isRequired,
    onTextChange: PropTypes.func.isRequired,
    create: PropTypes.func.isRequired,
    toggleModal: PropTypes.func.isRequired
}