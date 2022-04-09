import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ( e ) => {
        setInputValue( e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault ();

        if (inputValue.trim().length > 2 ){
            setCategories( cats =>[ inputValue, ...cats,]);
            setInputValue('');
        }
    }

  return (
    <form onSubmit={handleSubmit} className="p-3">
        <input
            className='border-2 rounded text-center'
            type="text"
            value={ inputValue }
            onChange={ handleInputChange }
            placeholder="Search"
        />

    </form>
  )
}

export default AddCategory

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}