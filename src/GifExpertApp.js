import React, { useState } from 'react'

export const GifExpertApp = () => {

    // const categories = ['My Chemical Romance', 'Motionless In White', 'Linkin Park'];

    const [categories, setCategories] = useState(['My Chemical Romance', 'Motionless In White', 'Linkin Park']);

    const handleAdd = () => {
        // Operador Spread para conservar los elementos previos y lo unimos a lo que queremos agregar
        // setCategories([...categories, 'Get Scared']);
        // Se obtiene el viejo arreglo y se retorna el nuevo arreglo
        setCategories(category => [...category, 'Get Scared']);
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />

            {/* Expresión JS */}
            {/* {
                categories
            } */}

            <button onClick={handleAdd}>Agregar</button>
            <ol>
                {
                    categories.map(category => {
                        return <li key={category}>{category}</li>
                    })
                }
            </ol>
        </>
    )
}