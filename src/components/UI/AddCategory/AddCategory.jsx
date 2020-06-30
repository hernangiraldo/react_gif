import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './AddCategory.scss';

const AddCategory = ({ setCategories }) => {

  const [ inputValue, setInputValue ] = useState('');

  const handleOnSubmit= (e) => {
    e.preventDefault();

    if (!inputValue || inputValue.trim().length < 2) {
      return;
    }

    setCategories(cats => [{ key: new Date().getTime(), value: inputValue }, ...cats]);
    setInputValue('');
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  return(
    <form className='AddCategory' onSubmit={handleOnSubmit}>
      <input
        className='AddCategory__input'
        onChange={handleInputChange}
        type="text"
        value={inputValue}
      />
      <button
        type='submit'
        className='button button__primary AddCategory__button'
        onClick={handleOnSubmit}
      >Add Category</button>
    </form>
  );
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}

export default AddCategory;
