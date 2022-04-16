import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['My Chemical Romance', 'Motionless In White', 'Linkin Park'];

    const [categories, setCategories] = useState(['Evangelion']);

    // const handleAdd = () => {
    //     /*
    //     Operador Spread para conservar los elementos previos y lo unimos a lo que queremos agregar
    //     setCategories([...categories, 'Get Scared']);
    //     Se obtiene el viejo arreglo y se retorna el nuevo arreglo
    //     */
    //     setCategories(category => [...category, 'Get Scared']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            {/* Podemos pasar funciones a componentes hijos por referencia */}
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {
                    categories.map(category => {
                        return <GifGrid key={category} category={category} />
                    })
                }
            </ol>
        </>
    )
}