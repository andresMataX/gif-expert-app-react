import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);

    const { data: images, loading } = useFetchGifs(category);

    /*// Utilizamos este hook para no volver a llamar la función cuando se vuelve a renderizar el componente por usar useState
    // useEffect(() => {
    //     getGifs(category).then(setImages);
    // }, [category]); // Se le pasa como segundo parámetro la lista de dependencias, al ser vacío, solamente se ejecuta una sola vez
    // Si la categoría cambia, pasa a ejecutar este efecto para mandar la llamada a la API.
    */

    return (
        <>
            <h3 className='card animate__animated animate__fadeIn'>{category}</h3>
            {loading && <p className='card animate__animated animate__flash'>Loading</p>}
            <div className='card-grid'>
                {
                    images.map((image) => {
                        return <GifGridItem
                            key={image.id}
                            {...image} // mandamos todas las propiedades como un objeto independiente
                        />
                    })
                }
            </div >
        </>
    )
}
