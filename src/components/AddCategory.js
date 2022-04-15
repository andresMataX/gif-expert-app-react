import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState();

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('Submit hecho');

        if (inputValue.trim().length > 2) {
            setCategories(category => [...category, inputValue]);
            setInputValue('');
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

// Obligamos a siempre enviar un prop
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}