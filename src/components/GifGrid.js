import React from 'react'

export const GifGrid = ({ category }) => {

    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=My Chemical Romance&limit=10&api_key=E7TOz8YH0UdvnAm3I6kt7CdpH7o5McoY';

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
    }

    getGifs();

    return (
        <div>
            <h3>{category}</h3>
        </div>
    )
}
