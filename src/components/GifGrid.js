import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {


    const [images, setImages] = useState([]);


    // Utilizamos este hook para no volver a llamar la función cuando se vuelve a renderizar el componente por usar useState
    useEffect(() => {
        getGifs();
    }, []); // Se le pasa como segundo parámetro la lista de dependencias, al ser vacío, solamente se ejecuta una sola vez

    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Evangelion&limit=10&api_key=E7TOz8YH0UdvnAm3I6kt7CdpH7o5McoY';

        const resp = await fetch(url);

        const { data } = await resp.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        });

        console.log(gifs);
        setImages(gifs);
    }

    // getGifs();

    return (
        <>
            <h3>{category}</h3>
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
