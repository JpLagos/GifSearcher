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
    <form onSubmit={handleSubmit} className="p-3 flex flex-col max-w-xs justify-center m-auto align center">
        <input
            className='border-2 rounded text-center'
            type="text"
            value={ inputValue }
            onChange={ handleInputChange }
            placeholder='"Hello world"'
        />
        <button type="submit" className='bg-darkblue my-3 self-center w-28 hover:bg-white hover:text-black border-2 border-white text-white font-bold py-2 px-4 rounded'>Search</button>

    </form>
  )
}

export default AddCategory

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}